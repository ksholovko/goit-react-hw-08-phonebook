import ContactForm from "components/ContactForm"
import ContactList from "components/ContactList"
import Filter from "components/Filter"
import css from "./Contacts.module.css"

const Contacts = () => {

    return (

        <div className={css.container}>
        
        <h1 className={css.title}>Phonebook</h1>
        
        <ContactForm />
        
        <h1 className={css.title}>Contacts</h1>

        <Filter/>
        
        <ContactList />
       
          </div>
    )


}

export default Contacts;