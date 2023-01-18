import VSEditor from "@monaco-editor/react";
import * as React from "react";


function App() {


  const jsvsHelloWorld = `
  // Your First Program

class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!"); 
    }
}`

  const [value, setValue] = React.useState(jsvsHelloWorld);

  return (
    <div style={{
      width: "100vw",
      height: "60vh",
    }}>
      <VSEditor
        className="w-full h-full"
        language="java"
        theme="vs-dark"
        value={value}
        onChange={(e) => {
          setValue(e);
        }}
      />
    </div>
  );
}

export default App;
