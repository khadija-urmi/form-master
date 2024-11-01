
// import SimpleForm from './component/SimpleForm/SimpleForm'
//import StatefulForm from './component/StatefulForm/StatefulForm'
//import RefForm from "./component/RefForm/RefForm"
//import HookForm from "./component/HookForm/HookForm"

import Grandpa from "./component/Grandpa/Grandpa";
import ReuseableForm from "./component/ReuseableForm/ReuseableForm"

function App() {
  const handleSingUpSubmit = data => {
    console.log('sign up data', data);
  }

  const handleUpdateProfile = data => {
    console.log('update profile', data);
  }

  return (
    <>

      <h1 className='text-3xl font-bold text-center'>Vite + React</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableForm formTitle={"Sign up "}
        handleSubmit={handleSingUpSubmit}>
        <div>
          <h2>Sing UP</h2>
          <p>please sign up right now</p>
        </div></ReuseableForm>
      <ReuseableForm formTitle={"Profile Update"}
        handleSubmit={handleUpdateProfile} submitButtonText='Update'>
        <div>
          <h2>Sing UP</h2>
          <p>please sign up right now</p>
        </div>
      </ReuseableForm> */}

    </>
  )
}

export default App
