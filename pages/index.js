import NavBar from "../components/NavBar";


export default function Home() {
  return (
    <div>
      <NavBar/>
      <h1>hallo This is Home!!!!!!! ahahahah</h1>
      <a>test</a>
      <style jsx>{`
        a {
          color : purple;
          background-color : skyblue;
        }
      `}</style>
    </div>
  );
}
