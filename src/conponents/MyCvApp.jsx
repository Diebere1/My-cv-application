import { useState } from 'react'
import '../styles/App.css'

function GeneralInfo ({isEditing, onEdit, onSubmit}){
  const [formData, setFormData] = useState({
    name: 'Emmanuel Ethelbert',
    email: 'ethelbertemmanuel1@gmail.com',
    phone: '+234 7061126730'
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return(
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label><strong>Name:</strong></label>
          <br />
          <input type="text" name='name' value={formData.name} onChange={handleChange}/>
          <br />
          <br />

          <label><strong>Email:</strong></label>
          <br />
          <input type="text"  name='email' value={formData.email} onChange={handleChange}/>
          <br />
          <br />

          <label><strong>Phone:</strong></label>
          <br />
          <input type="text" name='phone' value={formData.phone} onChange={handleChange}/>
          <br />
          <br />

          <button type='submit'>Submit</button>
        </form>
      ) :(
        <div>
          <p>
            <strong>Name: </strong> 
            {formData.name}
          </p>

          <p>
            <strong>Email: </strong> 
            {formData.email}
          </p>

          <p>
            <strong>Phone: </strong>
            {formData.phone}
          </p>

          {/* <button onClick={onEdit}>Edit</button> */}
        </div>
      ) }
    </div>
    
    // <div>
    //   {isEditing ? (
    //     <form onSubmit={handleSubmit}>
    //       <label><strong>Name:</strong></label>
    //       <br />
    //       <input type="text" name='name' value={formData.name} onChange={handleChange}/>
    //       <br />
    //       <br />

    //       <label><strong>Email:</strong></label>
    //       <br />
    //       <input type="text"  name='email' value={formData.email} onChange={handleChange}/>
    //       <br />
    //       <br />

    //       <label><strong>Phone:</strong></label>
    //       <br />
    //       <input type="text" name='phone' value={formData.phone} onChange={handleChange}/>
    //       <br />
    //       <br />

    //       <button type='submit'>Submit</button>
    //     </form>
    //   ) :(
    //     <div>
    //       <p>
    //         <strong>Name: </strong> 
    //         {formData.name}
    //       </p>

    //       <p>
    //         <strong>Email: </strong> 
    //         {formData.email}
    //       </p>

    //       <p>
    //         <strong>Phone: </strong>
    //         {formData.phone}
    //       </p>

    //       <button onClick={onEdit}>Edit</button>
    //     </div>
    //   ) }
    // </div>
  )
}

function EducationalInfo ({isEditing, onEdit, onSubmit}){
  const [formData, setFormData] =useState({
    MDschool: 'Federal Polytechnices Nekede, Owerri',
    BDschool: 'Meta offer through Coursera',
    study : 'Computer Science',
    location: 'Imo State, Owerri Nigeria',
    date: 'January 2024 - Present'
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(FormData)
  }

  return(
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label><strong>School: </strong></label>
          <br />
          <input type="text"  name='school' value={formData.MDschool} onChange={handleChange}/>
          <br />
          <br />

          <label><strong>Study: </strong></label>
          <br />
          <input type="text" name='study' value={formData.study} onChange={handleChange}/>
          <br />
          <br />

          <label><strong>Date: </strong></label>
          <br />
          <input type="text" name='date' value={formData.date} onChange={handleChange}/>
          <br />
          <br />

          <button type='submit'>Submit</button>
        </form>
      ) : (
        <div>
          <div className='edu-show'>
            <strong>School of Information Communication & Technology
            </strong>
            <p>{formData.date}</p>

            <ul>
              <li>{formData.MDschool}</li>
              {/* <li>{formData.location}</li> */}
            </ul>

            <strong>Front-End Development Course</strong>
            <p>Oct 2022 - 2023</p>

            <ul>
              <li>{formData.BDschool}</li>
              <li>Online Course</li>
            </ul>
          </div>

          <div>
            <h3>SKILLS</h3>
            <ul>
              <li>HTML5/CSS3</li>
              <li>Javascript</li>
              <li>ReactJs</li>
              <li>Python</li>
              <li>Project Managment</li>
              <li>Time Managment</li>
            </ul>
          </div>

          <div>
            <h3>ACHIEVEMENTS</h3>
            <strong>Introduction to Front- End Development</strong>
            <ul>
              <li>{formData.BDschool}</li>
              <li>Dec 2, 2022</li>
            </ul>

            <strong>Programming in Javascript</strong>
            <ul>
              <li>{formData.BDschool}</li>
              <li>Jan 24, 2023</li>
            </ul>

            <strong>Version Control</strong>
            <ul>
              <li>{formData.BDschool}</li>
              <li>Feb 3, 2023</li>
            </ul>

            <strong>HTML/CSS in depth</strong>
            <ul>
              <li>{formData.BDschool}</li>
              <li>Mar 24, 2023</li>
            </ul>
          </div>


          {/* <p>
            <strong>Master Degree in CS</strong>
            {formData.school}
          </p>

          <p>
            <strong>Study: </strong>
            {formData.study}
          </p>

          <p>
            <strong>Date: </strong>
            {formData.date}
          </p> */}

          {/* <button onClick={onEdit}>Edit</button> */}
        </div>
      )}
    </div>
  )
}

function ExperienceInfo ({isEditing, onEdit, onSubmit}){
  const [formData, setFormData] =useState({
    // company: 'Apriori Oil Group Company',
    position : 'Software Developer',
    responsibility: 'Web Design and Development',
    from: '2023',
    to: 'Present'
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(FormData)
  }

  return(
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label><strong>Company: </strong></label>
          <br />
          <input type="text"  name='company' value={formData.company} onChange={handleChange}/>
          <br />
          <br />

          <label><strong>Position: </strong></label>
          <br />
          <input type="text" name='position' value={formData.position} onChange={handleChange}/>
          <br />
          <br />

          <label><strong>Responsibility: </strong></label>
          <br />
          <input type="text" name='responsibility' value={formData.responsibility} onChange={handleChange}/>
          <br />
          <br />

          <label><strong>From: </strong></label>
          <br />
          <input type="text" name='from' value={formData.from} onChange={handleChange}/>
          <br />
          <br />

          <label><strong>To: </strong></label>
          <br />
          <input type="text" name='to' value={formData.to} onClick={handleChange}/>

          <button type='submit'>Submit</button>
        </form>
      ) : (
        <div className='experience-div'>
          <div className='conpy-header'>
            <div>
              <strong>Apriori Oil Group Company</strong>
              <br />
              <p className='role'>Freelancing Job</p>
            </div>

            <div className='locn-date-div'>
              <span>Remotely</span>
              <br />
              <span>{formData.from} - {formData.to}</span>
            </div>
          </div>

          <p className='rel-work'>
            including relevant work experience on my resume is important because it show hiring managers you've understood the requirements of the job
          </p>
          <ul>
            <li>{formData.responsibility}</li>
            <li>Web Managment</li>
          </ul>

          <div className='conpy-header'>
            <div>
              <strong>MB Financial Bank</strong>
              <br />
              <p className='role'>Freelancing Job</p>
            </div>

            <div className='locn-date-div'>
              <span>Remotely</span>
              <br />
              <span>{formData.from} - {formData.to}</span>
            </div>
          </div>

          <p className='rel-work'>
            including relevant work experience on my resume is important because it show hiring managers you've understood the requirements of the job
          </p>
          <ul>
            <li>{formData.responsibility}</li>
            <li>{formData.responsibility}</li>
          </ul>
          <div className='conpy-header'>
            <div>
              <strong>Logistics Company</strong>
              <br />
              <p className='role'>Freelancing Job</p>
            </div>

            <div className='locn-date-div'>
              <span>Remotely</span>
              <br />
              <span>{formData.from} - {formData.to}</span>
            </div>
          </div>

          <p className='rel-work'>
            including relevant work experience on my resume is important because it show hiring managers you've understood the requirements of the job
          </p>
          <ul>
            <li>{formData.responsibility}</li>
            <li>{formData.responsibility}</li>
          </ul>
          

          {/* <p>
            <strong>Position: </strong>
            {formData.position}
          </p>

          <p>
            <strong>Responsibility: </strong>
            {formData.responsibility}
          </p>

          <p>
            <strong>From: </strong>
            {formData.from}
          </p>
          <p>
            <strong>To: </strong>
            {formData.to}
          </p> */}

          {/* <button onClick={onEdit}>Edit</button> */}
        </div>
      )}
    </div>
  )
}

export default function MyCvApp () {
  const socialHandle = {
    email: 'emmanuelethelbert@gmail.com',
    linkdin: 'emmanuelethelbert@gmail.com',
    github: 'https://github.com/Diebere1'
  }
  const [editSection, setEditingSection] = useState(null); 
  
  const handleEdit = (section) => {
    setEditingSection(section);
  }

  const handleGeneralInfoSubmit = (data) => {
    setEditingSection(null);
  }
  const handleEducationalInfoSubmit = (data) => {
    setEditingSection(null);
  }
  const handleExperienceInfoSubmit = (data) => {
    setEditingSection(null);
  }
  return(
    <div>
      <header>
        <h1>Emmanuel Ethelbert</h1>
        <span>(MasaTech)</span>
        <p>
          {socialHandle.email} || {socialHandle.linkdin} || {socialHandle.github}
        </p>
      </header>

      <div className='About-me'>
        <div className='about-me-div'>
          <h2>General Information</h2>
          <p>
            Crafting responsive websites with HTML, CSS, and JavaScript, and continuously learning and exploring new technologies to drive online growth. And focus on improving user experiences. Feel free to let me know if you need further adjustments or have any other requests.
          </p>
        </div>
        <div className='gen-info'>
          <GeneralInfo 
            isEditing={editSection === 'generalInfo'}
            onEdit={() => handleEdit('generalInfo')}
            onSubmit={handleGeneralInfoSubmit}
          />
        </div>
      </div>

      <div className='More-info'>
        <div className='edu-div'>
          <div className='edu-info'>
            <h2>Educational Information</h2>
          </div>

          <div className='edu-details'>
            <EducationalInfo
              isEditing={editSection === 'educationalInfo'}
              onEdit={() => handleEdit('educationalInfo')}
              onSubmit={handleEducationalInfoSubmit}
            />
          </div>
        </div>

        <div className='exp-div'>
          <div className='exp-info'>
            <h2>Experience Inforamtion</h2>
          </div>

          <div className='exp-details'>
            <ExperienceInfo
            isEditing={editSection === 'experienceInfo'}
            onEdit={() => handleEdit('experienceInfo')}
            onSubmit={handleExperienceInfoSubmit}
            />
          </div>
        </div>
      </div>
    </div>

  )
}

// https://my-cv-application.pages.dev/


// the pure basics code 
// function MyCvApp() {
//   // General Information  
//   const [name, setName] = useState("Emmanuel Ethelbert");
//   const [email, setEmail] = useState("ethelbertemmanuel1@gmail.com");
//   const [phone, setPhone] = useState("07061126730");

//   // Educational Information 
//   const [school, setSchool] = useState('Federal Polytechnics Nekede,  Meta, Solo Learning, Odin Project');
//   const [study, setStudy] = useState("Computer Science");
//   const [date, setDate] = useState("2020 - 2024");

//   // Experience Information 
//   const [company, setCompany] = useState("Apriori Oil Group");
//   const [position, setPosition] = useState("Software Engineer");
//   const [responsibility, setResponsibility] = useState("Developed web application");
//   const [from, setFrom] = useState("2023");
//   const [to, setTo] = useState("present");

//   //State variable to check is if user is in edit mood 
//   const [isEditing, setIsEditing] = useState(false)
  
//   // State variable to check a submitted data form the submit button
//   const [submitData, setSubmittedData] = useState(null)

//   // const handleEdit = (field, value) =>{
//   //   setIsEditing(true);
//   //   // Reseting submitted data when editing 
//   //   setSubmittedData(null);

//   //   if (field === "general"){
//   //     setName(value.name);
//   //     setEmail(value.email);
//   //     setPhone(value.phone);

//   //   }else if(field === "education"){
//   //     setSchool(value.school);
//   //     setStudy(value.study);
//   //     setDate(value.date);

//   //   }else if(field === "experience"){
//   //     setCompany(value.company);
//   //     setPosition(value.position);
//   //     setResponsibility(value.responsibility);
//   //     setFrom(value.from);
//   //     setTo(value.to);
//   //   }
//   // }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsEditing(false); 
//     setSubmittedData({name, email, phone})   

//     console.log("Edited");
//   }

//   return (
//     <div>
//       <h1>General Information</h1>
//       {isEditing ?(
//         <div>
//           <form action="#" onSubmit={handleSubmit}>
//             <label>Name:</label>
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
//             <br />
//             <br />
//             <label>Email: </label>
//             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//             <br />
//             <br />
//             <label>Phone: </label>
//             <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/>
//             <br />
//             <br />
//             <button type='submit'>Submit</button>
//           </form>

//           {submitData && (
//             <div>
//               <p>Name: {submitData.name}</p>
//               <p>Email: {submitData.email}</p>
//               <p>Phone: {submitData.phone}</p>
//             </div>
//           )}
//         </div>
//       ) : (
//         <div>
//           <p> <strong>Name:</strong> {name}</p>
//           <p> <strong>Email:</strong> {email}</p>
//           <p> <strong>Phone:</strong> {phone}</p>
//           <button onClick={() => handleEdit('general', {name, email, phone})}>Edit</button>
//         </div>
//       )}

//       <h1>Educational Information</h1>
//       {isEditing ? (
//         <div>
//           <form action="#" onSubmit={handleSubmit}>
//             <label>School: </label>
//             <input type="text" value={school} onChange={(e) => setSchool(e.target.value)} />
//             <br />
//             <br />

//             <label>Study: </label>
//             <input type="text" value={study} onChange={(e) => setStudy(e.target.value)} />
//             <br />
//             <br />

//             <label>Date: </label>
//             <input type="text" value={date} onChange={(e) => setDate(e.target.value)}/>
//             <br />
//             <br />

//             <button type='submit'>Submit</button>
//           </form>
//         </div>
//       ) : (
//         <div>
//           <div> <strong>School: </strong> {school}</div>
//           <br />
//           <div> <strong>Study: </strong> {study}</div> 
//           <br />
//           <div> <strong>Date: </strong> {date}</div>
//           <br />
//           <button onClick={() => handleEdit('education', {school, study, date})}>Edit</button>
//         </div>
//       )}
      
//       <h1>Experience Information</h1>
//       {isEditing ? (
//         <div>
//           <form action="#" onSubmit={handleSubmit}>
//             <label>Company: </label>
//             <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
//             <br />
//             <br />

//             <label>Position: </label>
//             <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
//             <br />
//             <br />

//             <label>Responsiblility: </label>
//             <input type="text" value={responsibility} onChange={(e) => setResponsibility(e.target.value)}/>
//             <br />
//             <br />

//             <label> From: </label>
//             <input type="text" value={from}  onChange={(e) => setFrom(e.target.value)}/>
//             <br />
//             <br />

//             <label> To: </label>
//             <input type="text" value={to} onChange={(e) => setTo(e.target.value)}/>
//             <br />
//             <br />
//             <button type='submit'>Submit</button>
//           </form>
//         </div>
//       ) : (
//         <div>
//           <div> <strong>Company:</strong> {company}</div>
//           <br />
//           <div> <strong>Position:</strong> {position}</div> 
//           <br />
//           <div> <strong>Resiponsibility:</strong> {responsibility}</div>
//           <br />
//           <div> <strong>From:</strong> {from}</div>
//           <br />
//           <div> <strong>To: </strong> {to}</div>
//           <br />
//           <button onClick={() => handleEdit('education', {company, position, responsibility, from, to})}>Edit</button>
//         </div>
//       )}


//     </div>
//   )
// }

