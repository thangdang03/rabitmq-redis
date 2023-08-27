const amqplib = require("amqplib");
/// url connect 
const url_clount = 'amqps://hdgowbiv:SxvL5A7fgl4PCpLiPlAqGGuPXOC_DwTc@armadillo.rmq.cloudamqp.com/hdgowbiv';
const url_docker = '';

// send quieque
const Receive_ = async ()=>{
    try {
        //create connect 
        const conn = await amqplib.connect(url_clount);
        //create chanel hay con goi la hang doi
        const chanell = await conn.createChannel();
        // create name queue tao ten hang doi a
        const nameQueue = 'q2';
        //create queqe
        await chanell.assertQueue(nameQueue,{
            durable: true
        });
        //receive queqe
        await chanell.consume(nameQueue,(msg)=>{
            console.log('msg :: ',msg.content.toString());

        },{
           noAck: true
        })
        // close connect 
    } catch (error) {
        console.log('Error :: ', error)
    }
}

Receive_()



