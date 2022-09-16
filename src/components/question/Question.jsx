import React from 'react'
import './question.scss'
import wood from './questionUi/wood.png'
import { useForm } from "react-hook-form";

export default function Question() {
    const { register, handleSubmit, reset, formState: { errors} } = useForm({
        mode: 'onBlur'
    });
    const onSubmit = data => {
        alert('Server data' + JSON.stringify(data))
        reset()
    };

  return (
    <div>
        <div className="question">
            <img src={wood} alt="" className="quest-img" />
            <h1 className="question-title">Any questions?</h1>
            <div className="question-block">
                <form className="text-areas" onSubmit={handleSubmit(onSubmit)}>

                    <label>
                    <input type="text" className="input" placeholder='Your name'
                    {...register('name', {
                    required: 'Enter name',
                    minLength: {
                        value: 3,
                        message: 'Enter full name'
                    },
                    pattern: {
                        value: /^[a-zA-Z]+$/,
                        message: 'Enter name (less space!)'
                    }
                    })} />
                    {errors.name? <div className="error-input">{errors.name.message}</div> : ''}
                    
                    </label>

                    <label>
                    <input type="text" className="input" placeholder='Your telephone number' 
                    {...register('phone', {
                    required: 'Enter phone',
                    minLength: {
                        value: 10,
                        message: 'Enter full number (10)'
                    },
                    pattern: {
                        value: /[0-9]{10}/,
                        message: 'Enter correct number'
                    }

                    })}
                    />
                    {errors.phone? <div className="error-input">{errors.phone.message}</div> : ''}
                    </label>
                    
                    <label>
                    <textarea className="textarea" placeholder='Your question'
                    {...register('question', {
                    required: 'Enter question',
                    })}></textarea>
                    {errors.question? <div className="error-input">Enter Question</div> : ''}
                    </label>

                    <div className="button-send-block">
                       <input type="submit"  value='Send' className='header-button' /> 
                    </div>
                </form>
                <div className="text-question">
                    Write to us and we will be sure to answer all your questions and give you a comprehensive consultation.
                </div>
            </div>
        </div>
    </div>
  )
}
