
const MenuItem = ({item, onDel, onEdit}) => {
    const {id, text, menu, img, kcal, gram} = item
    return (
        <tr>
            <td>
                <img src={img} alt="메뉴이미지" /> 
            </td>
            <td>{text}</td>
            <td>{menu}</td>
            <td>{kcal} Kcal</td>
            <td>{gram}g</td>
            <td> 
                <p className="btn">
                    <button className="edit" onClick={() => onEdit(id)} >수정</button>
                    <button className="del" onClick={() => onDel(id)}>삭제</button>
                </p>
            </td>
        </tr>
    );
};

export default MenuItem;