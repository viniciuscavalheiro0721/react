import { GoogleLogin } from 'react-google-login';

const responseGoogle = (response) => {
    console.log(response);
};

const GoogleButton = () => {
    return (
        <GoogleLogin
            clientId="SEU_CLIENT_ID_DO_GOOGLE"
            buttonText="Entrar com o Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    );
};

export default GoogleButton;