import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'
export default function MealItemForm(props){
    return(
        <form className={classes.form}>
            <Input label='Amount'
            input={{
                id:'Amount',
                type:'number',
                min:'1',
                max:'10',
                step:'1',
                defaultValue:'1',
            }}/>
            <button className={classes.button}>+Add</button>
        </form>
    )
}