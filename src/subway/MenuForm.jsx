
const MenuForm = ({isEdit, textRef, cart, changeInput, onSubmit }) => {
    const { text, menu, img, gram, kcal} = cart
    return (
        <div className="MenuForm">
            <select onChange={changeInput}>
                <option value="">=== 정렬 ===</option>
                <option value="text">메뉴명</option>
                <option value="menu">Menu</option>
                <option value="kcal">칼로리</option>
                <option value="gram">중량</option>
            </select>

             <form onSubmit={onSubmit}>
                <p>
                    <label htmlFor="">이미지</label>
                    <input type="text" name="img" value={img} onChange={changeInput} ref={textRef} />
                </p>
                <p>
                    <label htmlFor="">메뉴명</label>
                    <input type="text" name="text" value={text} onChange={changeInput}  />
                </p>
                <p>
                    <label htmlFor="">Menu</label>
                    <input type="text" name="menu" value={menu} onChange={changeInput}  />
                </p>
                <p>
                    <label htmlFor="">칼로리</label>
                    <input type="text" name="kcal" value={kcal} onChange={changeInput}  />
                </p>
                <p>
                    <label htmlFor="">중량</label>
                    <input type="text" name="gram" value={gram} onChange={changeInput}  />
                </p>
                <p>
                    <button type="submit" >
                    { isEdit ? '수정' : '등록'}
                    </button>
                </p>
            </form>
        </div>
    );
};

export default MenuForm;