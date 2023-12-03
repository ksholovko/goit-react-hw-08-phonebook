import { FaAddressBook } from "react-icons/fa";


const Home = () => {

    return (
        <div style={{
            display: "flex",
            marginTop: '25vh',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem'
        }}>
        <h1 style={{ color: 'black' }}> Create Your Personal Phonebook </h1 >
        <FaAddressBook fill="#ff923cba" fontSize="2em" />
   </div> )


}

export default Home 