const amqplib1 = require('amqplib');
/// url connect 
const url_clount = 'amqps://hdgowbiv:SxvL5A7fgl4PCpLiPlAqGGuPXOC_DwTc@armadillo.rmq.cloudamqp.com/hdgowbiv';
const url_docker = '';

// send quieque
const sendQuieque = async ({msg})=>{
    try {
        //create connect 
        const conn = await amqplib1.connect(url_clount);
        //create chanel hay con goi la hang doi
        const chanell = await conn.createChannel();
        // create name queue tao ten hang doi a
        const nameQueue = 'q2';
        //create queqe
        await chanell.assertQueue(nameQueue,{durable: true});
        //send queqe
        await chanell.sendToQueue(nameQueue,Buffer.from(msg),{
            persistent: true
        })
        // close connect 
        conn.close();
    } catch (error) {
        console.log('Error :: ', error)
    }
}
const msg =process.argv.slice(2).join(' ') || 'hello'
sendQuieque({msg })



