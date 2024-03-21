// OpenAI

// import React, { useState, useEffect } from 'react';
// import { SyncLoader } from "react-spinners";
// import { ChatOpenAI } from '@langchain/openai';
// import {
//     ChatPromptTemplate,
//     SystemMessagePromptTemplate,
//     HumanMessagePromptTemplate,
// } from "@langchain/core/prompts";

// const Query = ({ query }) => {
//     const [response, setResponse] = useState(null);
  
//     const SECRET_KEY = process.env.REACT_APP_API_KEY;

//     useEffect(() => {
//         const fetchResponse = async () => {
//             try {
//                 const chat = new ChatOpenAI({ openAIApiKey: SECRET_KEY });

//                 const systemMessagePrompt = SystemMessagePromptTemplate.fromTemplate("How can I assist you within a second type anything here.");
//                 const humanMessagePrompt = HumanMessagePromptTemplate.fromTemplate(query);

//                 const chatPrompt = ChatPromptTemplate.fromMessages([systemMessagePrompt, humanMessagePrompt]);

//                 const formattedChatPrompt = await chatPrompt.formatMessages({});
//                 console.log("Formatted chat Prompt:", formattedChatPrompt);

//                 const response = await chat.invoke(formattedChatPrompt);
//                 console.log("Response:", response.content);
//                 setResponse(response.content);
//             } catch (error) {
//                 console.error("Error:", error);
//                 // Handle error gracefully
//             }
//         };

//         fetchResponse();
//     }, [query, SECRET_KEY]);

//     return (
//         <div>
//             {response ? <div>{response}</div> : <div><SyncLoader className="my-5 ms-3" color=" rgba(13, 202, 240, 1)" /> </div>}
//         </div>
//     );
// };

// export default Query;


// // Pinecone database
import React, { useState, useEffect } from 'react';
import { SyncLoader } from "react-spinners";
import { Pinecone } from '@pinecone-database/pinecone';
import { OpenAIEmbeddings } from '@langchain/openai';
import { PineconeStore } from "@langchain/pinecone";
import { ChatOpenAI } from '@langchain/openai';
import { RetrievalQAChain } from 'langchain/chains';



const Query = ({query}) => {
    const [response, setResponse] = useState(null);
    // const [documents, setDocuments] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const pinecone = new Pinecone({
                apiKey: "f783feb8-405e-4580-9970-749ea3b96185",
            });
        
            const index_name = 'langchain-rag-multiple-docs';
        
            const model = new OpenAIEmbeddings({
                openAIApiKey: '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',
                modelName: 'text-embedding-ada-002'
            });
            const pineconeIndex = pinecone.Index(index_name);
        
            const vectorstore = await PineconeStore.fromExistingIndex(
                model, { pineconeIndex }
            )
        
            const llm = new ChatOpenAI({
                openAIApiKey: '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',
                temperature: 1.0,
                modelName: 'gpt-3.5-turbo',
            });
        
            const chain = RetrievalQAChain.fromLLM(llm, vectorstore.asRetriever());
        
            const result = await chain.run(query);
            // const response = await index.query({query});
            // console.log(response);
            // console.log(result);
          
            setResponse(result);
        };
        
        fetchData();
    }, [query]);

    return (
        <div>
     
            {response !== null ? <p>{response}</p> : <SyncLoader className="my-5 ms-3" color="rgba(13, 202, 240, 1)" />}
           
        </div>
    );
};

export default Query;

