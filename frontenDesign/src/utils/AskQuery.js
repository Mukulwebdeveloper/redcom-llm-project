// Chat Modal Prompt template
// import { ChatOpenAI } from '@langchain/openai';
// import {
//     ChatPromptTemplate,
//     PromptTemplate,
//     SystemMessagePromptTemplate,
//     HumanMessagePromptTemplate,
//   } from "@langchain/core/prompts";
//   import {
 
//     HumanMessage,
//     SystemMessage,
//   } from "@langchain/core/messages";

// export const AskQuery = (getinputvalue) =>{
//     console.log(getinputvalue);

    // const SECRET_KEY = process.env.REACT_APP_API_KEY

    // const chat = new ChatOpenAI({openAIApiKey:SECRET_KEY })
    // const systemMessagePrompt = SystemMessagePromptTemplate.fromTemplate("How can I assist you within a second type anything here. ");
    // const humanMessagePrompt  = HumanMessagePromptTemplate.fromTemplate("{Asked_Query}")

    // const chatprompt = ChatPromptTemplate.fromMessages([
    //     systemMessagePrompt, humanMessagePrompt
    // ])

    // const formattedchatPrompt = chatprompt.formatMessages({
    //     Asked_Query:getinputvalue
    // })
    // console.log("Formatted chat Prompt:", formattedchatPrompt)
//  }