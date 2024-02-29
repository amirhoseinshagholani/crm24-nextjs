declare var global: any;

const GetSessionName = async () => {

    const response_sina_token = await fetch('http://185.126.8.108/NOMS-BE/api/Authentication/LoginAsync',{
        cache:'no-cache',
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            username:"NetXpert",
            password:"@NetXpert#26200!551@"
        })
    });
    const sinaToken = await response_sina_token.text();
    
    const response_crm_token = await fetch('http://185.126.8.108/NOMS-BE/API/NetExpert/GetCRMToken',{
        cache:'no-cache',
        method:'POST',
        headers:{
            'Authorization':sinaToken,
        }
    })

    const data_of_cromToken = await response_crm_token.json();
    const crmToken = data_of_cromToken.result.token;

    const response_sessionName = await fetch('http://185.126.8.108/NOMS-BE/API/NetExpert/GetCRMSessionName',{
        cache:'no-cache',
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization':sinaToken,
        },
        body: JSON.stringify({
            token: crmToken
        })
    })

    const data_of_sessionName = await response_sessionName.json();
    global.sessionName = data_of_sessionName.result.sessionName;
       
    return global.sessionName;
}

export default GetSessionName;
