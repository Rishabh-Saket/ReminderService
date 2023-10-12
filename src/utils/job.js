const cron=require('node-cron');
const emailService=require('../services/email-service');
/**
 * 10:am
 * We will check are there any pending emails which was expected to be sent  by now  and is pending
 */

const setupJobs=()=>{
    cron.schedule('*/2 * * * *',async ()=>{
        const response=await emailService.fetchPendingEmails();
        response.forEach((email) => {
            sender.sendBasicEmail(
              { to: email.reciepientEmail,
               subject: email.subject,
               text: email.content
              },async (err,data)=>{
                if(err)
                {
                    console.log(err);
                }
                else{
                    console.log(data);
                    await emailService.updateTicket(email.id,{status: "SUCCESS"});
                }
              }
            )
        });
        console.log(response);
    });
}

module.exports=setupJobs;