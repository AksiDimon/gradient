import s from './Grid.module.css';
// import classNames from 'classnames'
import { useState } from 'react';


export function Grid() {
    //   const [color1, setColor1] = useState('');
    //   const [color2, setColor2] = useState('');

    const [values, setValues] = useState({
        color1: "",
        color2: "",
        color3: "",
        color4: "",
    })
    //   values.color1 = 'blue'
    //   console.log(values.color1, 'check')
    console.log(values)
    const [background, setBackGround] = useState('white');

    function handleValues(event) {
        console.dir(event.target);
        const { name, value } = event.target;  // когда мы хотим вытащить нужные нам значения и они уже где то прописаны в пропсах и их названия соответстуют тем что нам нужны для привязки нужных значений к ключам то мы можем воспользоваться им, а если нет, то для этого можно написать props name ={} и передать ему тот ключ который нам нужен. Так же этот способ нужен если у нас есть идентичная задача вроде полностью одинаковых инпутов в которых мы проходимся map() но в каждый input вписываются разные значения. и полчуение данных привязвнных к определенному input мы можем через event.target и взять их конкретные ключи, к которым на привязывать данные.
        // console.log(name, '|', value, '|', event.target);
        const newValues = {...values};
        // newValues[name] = value
        for(let key in newValues) {
            if(key === name){
                newValues[key] = value
            }
        }
        setValues(newValues);
    }

    // const foo = x => (((((((((((((((((((((((((((((((((((((((((x + 2)))))))))))))))))))))))))))))))))))))))));
    // const foo2 = x => ({x})


    const str = "yuiop";

    const o = {
        "yuiop": 777,
        "qwe": 111,
        [str]: 222,
    }

    o.qwe = 111
    o[str] = 222;


    // function handleValues(event) {
    //     const {name, value} = event.target;
    //     setValues(prevValues => (
    //         {
    //         ...prevValues,
    //         [name]: value,
    //     }
    //     ))
    // }


      
      
    function handlePrint() {
        //передаем данные из useState с введенными данными colors\
        const colors = Object.values(values).join(',');
        // arrColors.map(color =>  {
        //    return `${color},`
        // } )
        setBackGround(`linear-gradient(${colors})`);
    }

    function clearInput() {
        // const newValues = {};
        // for(let key in values ) {
        //     newValues[key] = ''
        // }
        // setValues({
        //     ...newValues
        // })
        const arrKeys = Object.keys(values);
        
        const arrValues = arrKeys.map((key) => [key, ''])
        const newValues = Object.fromEntries(arrValues); // спомощью этого метода возвращаю из массиво обратно в объект, этот метод создает новый Объек а не мутрует старый.
        setValues(newValues)

    }

    function reverseColor() {
        const reverseColors = Object.values(values).reverse();
         const arrColors = Object.entries(values).map(([key, value], i) => {
            //как то перевернуть задом наперет все val
            return  [key, reverseColors[i]];
         })
         console.log(arrColors, '|', values)
         const objReversedColors = Object.fromEntries(arrColors); // из массива возвращаем обратно в объект.
         setValues(objReversedColors)
       
        // setValues({
        //     color1: values.color2,
        //     color2: values.color1,
        // })
        // setColor1(color2);
        // setColor2(color1);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
      };
//https://chatgpt.com/share/66fd1f8d-0684-8013-b23a-3fe0bf16aed5
//1. Роль <form>:
// - Элемент <form> представляет собой контейнер для различных элементов управления, таких как текстовые поля, кнопки и другие. Он используется для сбора данных от пользователя и отправки этих данных на сервер или для выполнения определенных действий в JavaScript.

// 2. onSubmit:
//    - onSubmit — это событие, которое срабатывает, когда пользователь отправляет форму, например, нажимая кнопку с типом "submit". Это событие позволяет выполнить функцию или код в ответ на отправку формы.
//    - В вашем коде onSubmit={handleSubmit} устанавливает функцию handleSubmit как обработчик события отправки формы. Это значит, что когда форма будет отправлена, выполнится код внутри handleSubmit.

// 3. event.preventDefault():
//    - Метод preventDefault() предотвращает стандартное поведение браузера при отправке формы. По умолчанию, при отправке формы браузер перезагружает страницу или переходит на новую страницу с указанным в атрибуте action URL. Использование event.preventDefault() позволяет отменить это поведение, так что вы можете обработать отправку формы на стороне JavaScript без перезагрузки страницы или перехода на другую страницу.
//    - В вашем коде, вызов event.preventDefault() позволяет вам выполнять другие действия (например, валидацию данных, сброс формы или изменение состояния приложения) вместо того, чтобы отправлять форму стандартным способом.

// В итоге, ваш код создает интерактивную форму, которая может выполнять функции на стороне клиента, не перезагружая страницу, и дает вам возможность управлять данными, введенными пользователем.
    
    

    return (
        <div className={s.gridSquare} style={{ background: background }}>
            <form onSubmit={handleSubmit}> 
            <div className={s.mainContainerInputs}>
                <div className={s.inputs}>
                    
                        {Object.entries(values).map(([key, value]) => (
                            <input
                                // key={key}
                                name={key}
                                value={value}
                                type="text"
                                placeholder={key}
                                onChange={handleValues}

                            />
                        ))}
                    

                    {/* <input
             value={values.color1}
            type="text"
            placeholder="color 1"
            onChange={handleValues}
          />
          <input
             value={values.color2}
            type="text"
            placeholder="color 2"
            onChange={handleValues}
          /> */}
                </div>

                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <button type='submit'  onClick={handlePrint} className={s.buttonPrint}>Print</button>
                    <button type='button' onClick={clearInput} className={s.buttonPrint} >clear</button>
                    <button  type='button' onClick={reverseColor} className={s.buttonPrint} >reverse Color</button>
                </div>
            </div>
            </form>
        </div>
    );
}
