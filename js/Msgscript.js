const sendMail = (params)=>{
    let tempParams = {
        from_name: "Trust Upgrade Site",
        to_name: "Sir",
        message: document.getElementById("message").value,
    }

    emailjs.send("service_qkib1qb", "template_ylwhnx8", tempParams)
    .then((response) => {
        console.log("success", response.status);
    })
}