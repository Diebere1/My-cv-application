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

          <button onClick={onEdit}>Edit</button>
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
    school: 'Federal Polytechnices Nekede, Owerri, Meta, Solo Learning, YouTube, Odin Project React',
    study : 'Computer Science',
    date: '2021 to Present'
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
          <input type="text"  name='school' value={formData.school} onChange={handleChange}/>
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
          <p>
            <strong>School: </strong>
            {formData.school}
          </p>

          <p>
            <strong>Study: </strong>
            {formData.study}
          </p>

          <p>
            <strong>Date: </strong>
            {formData.date}
          </p>

          <button onClick={onEdit}>Edit</button>
        </div>
      )}
    </div>
  )
}

function ExperienceInfo ({isEditing, onEdit, onSubmit}){
  const [formData, setFormData] =useState({
    company: 'Apriori Oil Group, MB Finance, BMO Online Bank, etc.',
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
        <div>
          <p>
            <strong>Company: </strong>
            {formData.company}
          </p>

          <p>
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
          </p>

          <button onClick={onEdit}>Edit</button>
        </div>
      )}
    </div>
  )
}

export default function MyCvApp () {
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
        <p>
          emmanuelethelbert@gmail.com 
          emmanuelethelbert@gmail.com
          emmanuelethelbert@gmail.com
        </p>
      </header>

      <div className='About-me'>
        <div className='about-me-div'>
          <h2>General Information</h2>
          <p>
            Similar to resume summary - about me is an introduction that provides a brief snapshot of your background, relevant skills, and key accomplishments.
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

