interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  message: string;
  accept: boolean;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
  accept,
}) => (
  <div>
    <h1>Bienvenido a UMIA, {name}!</h1>
    <p>
      Enviaste correctamente un mensaje a nosotros desde el correo: {email}.
    </p>

    <p>
      Agradecidos por tu mensaje: <br />
      {message}
    </p>
    <p>
      {accept === true && "Usted queda de acuerdo a los terminos y condiciones"}
    </p>
  </div>
);
