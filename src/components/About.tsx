import ContactCardBuilder from "./ContactCardBuider";

export function About() {
  return (
    <div className="my-4">
      <h2 id="AboutUs" className="text-3xl font-bold">About Us</h2>
      <ContactCardBuilder />
      <h3 className="text-2xl font-semibold text-center mb-4">Checkout our github repo!</h3>
      <div className="flex items-center justify-center">
        <img src="qr_code.png" alt="qr" className="h-48 w-auto"/>
      </div>
    </div>
  )
}
