import { useEffect, useRef, useState } from "react";
import MenuForm from "./MenuForm";
import MenuList from "./MenuList";
import './scss/menu.scss'
import Header from "./Header";

const Menu = () => {
    const [data, setData] = useState([
      {text: '이탈리안비엠티', img: 'https://www.subway.co.kr/images/menu/sandwich_cl01_01.jpg',menu: 'ItalianBMT', kcal: '340', gram: '203' }
    ])
    const no = useRef(1)
    const textRef = useRef()
    const [cart, setCart] = useState({
      img: '', text: '', menu: '', kcal: '', gram: ''
    })

    const [isEdit, setIsEdit] = useState(false)
    const {img, text, menu, kcal, gram} = cart
    
    const onDel = (id) => {
      setData(data.filter(item => item.id !== id))
    }
    const onEdit = (id) => {
      setCart(data.find(item => item.id === id))
      setIsEdit(true)
    }

    const changeInput = e => {
      const {name, value} = e.target 
      setCart({
        ...cart,
        [name] : value
      })
    }
    const onSelect = (e) => {
      const { value} = e.target
      setData([...data].sort((a, b) => a[value] > b[value] ? 1 : -1))
    }

    const onSubmit = e => {
      e.preventDefault()
      if(!cart.text || !cart.menu || !cart.kcal || !cart.gram || !cart.img ) return

      if(isEdit){
        setData(data.map(item=>item.id === cart.id ? cart : item))
        setIsEdit(false)
        setCart({img: '', text: '', menu: '', kcal: '', gram: ''})
        
      }else {
        cart.id = no.current++
        setCart({img: '', text: '', menu: '', kcal: '', gram: ''})
        setData([...data, cart])
        textRef.current.focus()
      }
    }

    useEffect(() => {
      textRef.current.focus()
    },[isEdit])

    return (
        <div className="contents Menu">
          <Header/>
          <h2>메뉴등록리스트</h2>
          <div className="inner">
            <MenuForm cart={cart} textRef={textRef} isEdit={isEdit} changeInput=  {changeInput} onSelect ={onSelect} onSubmit={onSubmit}/>
            <MenuList data={data} onDel={onDel} onEdit={onEdit}/>
          </div>
        </div>
    );
};

export default Menu;