import css from '../FeedbackOptions/FeedbackOptions.module.css'

export function FeedbackOptions({options, onLeaveFeedback}) {
  const state = Object.keys(options)
  return (
<ul className={css.listButton}>
  {state.map(btnName => {
      return <button key={btnName} className={css.button} name={btnName} onClick={()=> onLeaveFeedback(btnName)}>{btnName}</button>
  })}  
</ul>
)
}



