import { useSelector } from "react-redux"
import Input from "../ui/input"
import TextArea from "../ui/text-area"

const Form = ( props ) => {
  const { isLoading } = useSelector(state => state.article)
    const {title, description, body, setTitle, setDescription, setBody, formSubmit} = props


  return (
    <form onSubmit={formSubmit} >
        <Input label="Title" state={title} setState={setTitle} />
        <TextArea label="Description" state={description} setState={setDescription} />    
        <TextArea label="Body" state={body} setState={setBody} height="200px" />    
        <button 
        className="w-100 btn btn-lg btn-primary mt-3" 
        type="submit"
        >
            { isLoading ? "Loading..." : "Create" }
        </button>
    </form>
  )
}

export default Form