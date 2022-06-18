import './App.css';
import ContactCard from "./components/ContactCard";

function App() {

    return (

    <div className="App">
        <ContactCard
            img={"https://www.pngmart.com/files/22/Rugrats-PNG-Picture.png"}
            name={"Chucki Fenster"}
            phone={"312-235-6466"}
            email={"chuckfbaby@gmail.com"}
        />

        <ContactCard
            img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIDItDAuyVAIXLdiXWOqxMgsI-Gej1Ne-F1cNbxFZ5UZ0-Q9dU-FTJPxeuyk5wfPFVygU&usqp=CAU"}
            name={"Tommy Pickles"}
            phone={"312-444-6326"}
            email={"bigboytommy@gmail.com"}
        />

        <ContactCard
            img={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d3ee19fb-ecfb-4164-8803-36cfba3e527c/dea8rcm-b39b6f35-d87f-43ae-8158-bc262b4157d1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QzZWUxOWZiLWVjZmItNDE2NC04ODAzLTM2Y2ZiYTNlNTI3Y1wvZGVhOHJjbS1iMzliNmYzNS1kODdmLTQzYWUtODE1OC1iYzI2MmI0MTU3ZDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ryb4DdgLGkb7adBFRkipdjPJBEH32Shmv-GZQO0PlGo"}
            name={"Lil DeVille"}
            phone={"312-565-562"}
            email={"lilone@gmail.com"}
        />

        <ContactCard
            img={"https://i.pinimg.com/originals/a3/d1/46/a3d14675ea8675721113a310ba1b04ce.jpg"}
            name={"Susie Carmichael"}
            phone={"312-932-7721"}
            email={"susieque@gmail.com"}
        />

        <ContactCard
            img={"https://www.xwhos.com/photo/whois_randy_carmichael_profile_1223775.webp"}
            name={"Randy Carmichael"}
            phone={"312-244-2852"}
            email={"rcar@gmail.com"}
        />


    </div>

  );
}

export default App;
