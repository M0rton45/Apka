import logo from "./logo.png";

export function Navbar() {
  return (
    <div className="h-[50px] bg-[#333] border-b border-white flex items-center">
      <img src={logo.src} alt="logo" className="h-[30px]" />
    </div>
  );
  // TODO
  // Dodać zdjęcie z figmy (logo)
  // Nav bar 3 z tymi samymi stylami itd trzeba zrobić jak z inputami
  // Personal data - CV - Contact
  // biały pasek pod navbarem na całą szerokość strony
}
