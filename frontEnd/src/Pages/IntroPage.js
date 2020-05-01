import React, { Fragment } from "react";
import "../styles.css";

const IntroPage = event => {
  // event.preventDefault();

  return (
    <Fragment>
      <p className="mainHeading"> Introduction </p>
    
      <p className="nm-data-content">
        "Java was started as a project called "Oak" by James Gosling in June
        1991."
      </p>
        <strong>Java Virtual Machine (JVM) :</strong>
        <br />
        <pre>
        Phases to execute the java program.
        
              1) Writing of the program is of course done by java programmer like you
              and me. 

              2) Compilation of program is done by javac compiler, javac is
              the primary java compiler included in java development kit (JDK). It
              takes java program as input and generates java bytecode as output. 
              
              3) In third phase, JVM executes the bytecode generated by compiler. This is
              called program run phase.
        </pre>
        <div>
        The primary function of JVM is to execute the bytecode produced by
        compiler. Each operating system has different JVM, however the output
        they produce after execution of bytecode is same across all operating
        systems. That is why we call java as platform independent language.
        
        bytecode As discussed above, javac compiler of JDK compiles the java
        source code into bytecode so that it can be executed by JVM. The
        bytecode is saved in a .class file by compiler.
        </div>
        <br />
        Java Development Kit(JDK)
        <br />
        While explaining JVM and bytecode, I have used the term JDK. Let’s
        discuss about it. As the name suggests this is complete java development
        kit that includes JRE (Java Runtime Environment), compilers and various
        tools like JavaDoc, Java debugger etc. In order to create, compile and
        run Java program you would need JDK installed on your computer.
        <br />
        Java Runtime Environment(JRE)
        <br />
        JRE is a part of JDK which means that JDK includes JRE. When you have
        JRE installed on your system, you can run a java program however you
        won’t be able to compile it. JRE includes JVM, browser plugins and
        applets support. When you only need to run a java program on your
        computer, you would only need JRE.
        <br />
        Java is a platform independent language:
        <br />
        <br />
        Compiler(javac) converts source code (.java file) to the byte
        code(.class file). JVM executes the bytecode produced by compiler. This
        byte code can run on any platform such as Windows, Linux, Mac OS etc.
        Which means a program that is compiled on windows can run on Linux and
        vice-versa. Each operating system has different JVM, however the output
        they produce after execution of bytecode is same across all operating
        systems. That is why we call java as platform independent language.
        <br />
      
    </Fragment>
  );
};

export default IntroPage;
