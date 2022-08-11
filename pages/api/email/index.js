import sgMail from '@sendgrid/mail';

function sendEmail(req, res) {
    const data = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const { template, sendTo, name } = data;

    const templates = {
        contactUs: 'd-59ae8cc7f56d40f18904d6c3d746709e'
    };

    const msg = {
        to: 'benmcl@shaw.ca',
        from: {
            email: 'dev@shophopper.ca',
            name
        },
        templateId: templates[template],
        dynamic_template_data: data
    };

    sgMail.send(msg, (error, result) => {
        if (error) {
            console.log(error);
            res.send({ status: 'error', message: error.message });
        } else {
            res.send({
                status: 'success',
                message: `email sent to ${sendTo} with template ${template}`
            });

            console.log('====================');
            console.log(`${template} email sent`);
            console.log('====================');
        }
    });
}

export default sendEmail;
