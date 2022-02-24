const exec = require('child_process').exec;
process.env.query = "123123";

export default function handler(req, res) {
  const isSafe = req.query.pwd === process.env.query;
  if (isSafe) {
    const script = exec("cmd /update.cmd");
    script.stdout.on('data', (data)=>{
      console.log(data); 
      // do whatever you want here with data
    });
    script.stderr.on('data', (data)=>{
        console.error(data);
    });
    res.status(200).send("Ok. Server is updating");
  } else {
    res.status(320).send("Fuck off");
  }
}