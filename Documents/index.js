module.exports = req => {
  const today = new Date();
  return `
  <html>
  <head>
    <title>
      PatientForm
    </title>
    <style>
      .main-content{
        display: flex;
        justify-content: center;
        align-items:center;
        flex-direction: column;
        margin-left:20%
        margin-top:5%
      }
      .top{
        display: inline-flex;
      }
      .top img{
        width: 87px;
      }
      .content{
        margin-left:34%
      }
    </style>
  </head>
  <body>
    <div class="main-content">
      <div class="top">
        <img src="vproject291batch36-nunoon-36-medical.jpg"/>
      <h3>City hospital</h3>
      </div>
      <div>
        <h4>Patient Information</h4>
        </div>
    </div>
    <div class="content">
      <h6>Name:${req.details.name}
        </h6>
        <h6>Gender:${req.details.gender}
              </h6>
        <h6>Address:${req.details.address}
        </h6>
        <h6>Phonenumber:${req.details.phonenumber} 
        </h6>
        <h6> Bloodgroup:${req.details.bloodgroup}
          </h6>
          <h6>
            Symptoms:${req.details.symptoms}
            </h6>
            <h6>Date Of admitted:${today}
              </h6>
      </div>
  </body>
</html>

  `;
};
