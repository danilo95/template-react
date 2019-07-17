import React from 'react';
import NavBar from './navbar/NavBar';
import GraphContent from './GraphContent/GraphContent';
import ProjectList from './projectlist/ProjectList';
import Commentlist from './Commentlist/Commentlist';
import TeamList from './Teamlist/TeamList';

import './app.css';
let data=[
  {
  id:0, start:"Qu lili in ",firtslink:"high force grid  day mission, the desing",project:"new project",iteration: "interation june"},
  {id:1, start:"pay litle in ",firtslink:"high force grid  day mission, the desing",project:"new project",iteration: "interation june"},
  {id:2, start:"lin don dong in ",firtslink:"high force grid  day mission, the desing",project:"new project",iteration: "interation june"},
  {id:3, start:"start of the week",firtslink:"high force grid  day mission, the desing",project:"new project",iteration: "interation june"},
  {id:4, start:"lookin",firtslink:"high force grid  day mission, the desing",project:"new project",iteration: "interation june"}
];
let projects=[
  {
  id:0, name:"Ali",description:"high force grid  day mission, the desing",project:"new project",iteration: "interation june"},
  
];
function App() {
  return (
    <>
      <NavBar/>
      <div className="container">
        <div className="panel">
          <ProjectList />
          <Commentlist data={data}/>
        </div>
        <div className="aside">
          <GraphContent/>
          <TeamList />
        </div>
      </div>
    </>
  );
}

export default App;