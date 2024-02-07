import {Home} from './templates/Home'
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import store from './stores/store';
import PageNotFound from './templates/common/404';
import Layout from './templates/hoc/Layout';

import Login from './templates/accounts/Login';
import Signup from './templates/accounts/Signup';
import Activate from './templates/accounts/Activate';
import ResetPassword from './templates/accounts/ResetPassword';
import ResetPasswordConfirm from './templates/accounts/ResetPasswordConfirm';
import {Doctor}  from './templates/accounts/Doctor';
import {TabbedInterface} from './templates/accounts/TabbedInterface';
import { Journal } from './templates/accounts/Journal';
import { Assesment } from './templates/accounts/Assesment';
import { Assesment1 } from './templates/accounts/Assesment1';
import {Assesment2} from './templates/accounts/Assesment2';
import { Footer } from './templates/common/Footer';
import Payment from './templates/accounts/Payment';
import Videohome from './templates/accounts/Videohome';
import RoomPage from './templates/accounts/VideoRoom';
import Chatbott from './templates/accounts/Chatbott';
import SurveyPage from './templates/accounts/SurveyPage';
import {Stressinfo} from './templates/accounts/Stressinfo';
import { Depressioninfo } from './templates/accounts/Depressioninfo';
import { DepressionAssesment } from './templates/accounts/Depressassesment';

export default function App() {
    const isAuthenticated = useSelector((state)=> state.auth?.isAuthenticated)
  return (
    <Router>
       <Layout>
           <Routes>
            
               <Route exact path='*' element={<PageNotFound/>} />
               <Route exact path='/' element={<Home/>} />
                   <Route exact path='/login' element={<Login/>} />
                    <Route exact path='/signup' element={<Signup/>} />
                    <Route exact path='/login' element={<Login/>} />
                    <Route exact path='/signup' element={<Signup/>} />
                    <Route exact path='/reset-password' element={<ResetPassword/>} />
                    <Route exact path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm/>}/>
                    <Route exact path='/activate/:uid/:token' element={<Activate/>} />
                    <Route exact path='/doctor' element={ isAuthenticated ? <Doctor/> : <Navigate to="/"/>}/>
                    <Route exact path='/tabbed' element={ isAuthenticated ? <TabbedInterface/> : <Navigate to="/"/>}/>
                    <Route exact path='/journal' element={ isAuthenticated ? <Journal/> : <Navigate to="/"/>}/>
                    <Route exact path='/assesment' element={ isAuthenticated ? <Assesment/> : <Navigate to="/"/>}/>
                    <Route exact path='/assesment1' element={<Assesment1/>}/>
                    <Route exact path='/assesment2' element={<Assesment2/>}/>
                    <Route exact path='/footer' element={<Footer/>}/>
                    <Route exact path='/payment' element={ isAuthenticated ? <Payment/> : <Navigate to="/"/>}/>
                    <Route exact path='/videohome'element={ isAuthenticated ? <Videohome/> : <Navigate to="/"/>}/>
                    <Route exact path='/room/:roomId' element={ isAuthenticated ? <RoomPage/> : <Navigate to="/"/>}/>
                    <Route exact path='/chatbott' element={ isAuthenticated ? <Chatbott/> : <Navigate to="/"/>}/>
                    <Route exact path='/survey' element={ isAuthenticated ? <SurveyPage/> : <Navigate to="/"/>}/>
                    <Route exact path='/stressinfo' element={<Stressinfo/>}/>
                    <Route exact path='/depressinfo' element={<Depressioninfo/>}/>
                    <Route exact path='/depressassesment' element={<DepressionAssesment/>}/>

           </Routes>
       </Layout>
    </Router>
  )
}
 


