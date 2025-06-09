import React from "react";
import './styles.scss';
import { motion } from "framer-motion"
//************** */ IMPORTING ICONS 
import reactlogo from "./images/react.png";
import javascriptlogo from "./images/javascript.png";
import typescriptlogo from "./images/Typescript.png";
import nodejslogo from "./images/nodejs.png";
import gitlogo from "./images/git.png";
import awslogo from "./images/aws.jpg";
import sqllogo from "./images/sql.webp";
import dockerlogo from "./images/docker.png";
import mongodblogo from "./images/mongodb.jpg";
import nextjslogo from "./images/nextjs.png";
import postmanlogo from "./images/postman.png";
import vscodelogo from "./images/vscode.jpg";
import cpp from "./images/c++.jpg";
import postgresSQLlogo from "./images/postgress.jpg";
import reactNativelogo from "./images/reactnative.png";



const Skills = () => {
  const skills = [
    { name: "React", level: 9, image: reactlogo },
    { name: "JavaScript", level: 8, image: javascriptlogo },
    { name: "TypeScript", level: 7, image: typescriptlogo },
    { name: "Node.js", level: 6, image: nodejslogo },
    { name: "Git", level: 6, image: gitlogo},
    { name: "Docker", level: 5, image: dockerlogo },
    { name: "AWS", level: 4, image: awslogo },
    { name: "SQL", level: 6, image: sqllogo },
    { name: "Mongodb", level: 9, image: mongodblogo },
    { name: "PostgresSQL", level: 8, image: postgresSQLlogo },
     { name: "ReactNative", level: 4, image: reactNativelogo },
    // { name: "Node.js", level: 6, image: nodejslogo },
    { name: "Nextjs", level: 7, image: nextjslogo },
    { name: "Postman", level: 6, image: postmanlogo },
    { name: "VsCode", level: 9, image: vscodelogo },
    { name: "C++", level: 9, image: cpp },
  ]

  return (
    <div
      className="bg-gray-900"
      style={{
        minHeight: "100vh",
        // backgroundColor: "black",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          color: "yellow",
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "2rem",
          textAlign: "center",
        }}
      >
        My Skills
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              backgroundColor: "yellow",
              cursor: "pointer",
              overflow: "hidden",
              width: `${skill.level * 20 + 40}px`,
              height: `${skill.level * 20 + 40}px`,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={skill.image || "/placeholder.svg"}
              alt={skill.name}
              width={skill.level * 10 + 20}
              height={skill.level * 10 + 20}
              style={{
                objectFit: "contain",
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
};

export default Skills;
