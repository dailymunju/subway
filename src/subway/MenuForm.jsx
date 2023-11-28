
const MenuForm = ({isEdit, textRef, cart, changeInput, onSubmit,onSelect }) => {
    const { text, menu, img, gram, kcal} = cart
    return (
        <div className="MenuForm">
            <select onChange={onSelect}>
                <option value="">=== 정렬 ===</option>
                <option value="text">메뉴명</option>
                <option value="menu">Menu</option>
                <option value="kcal">칼로리</option>
                <option value="gram">중량</option>
            </select>

             <form onSubmit={onSubmit}>
                <p>
                    <label htmlFor="">이미지</label>
                    <input type="text" name="img" value={img} onChange={changeInput} ref={textRef} placeholder="복사한 이미지주소를 입력하세요"/>
                </p>
                <p className="guide"> 이미지입력값 &nbsp;:&nbsp; https://www.subway.co.kr/images/menu/sandwich_cl06_01.jpg</p>
                <p>
                    <label htmlFor="">메뉴명</label>
                    <input type="text" name="text" value={text} onChange={changeInput} placeholder="메뉴명을 입력해주세요" />
                </p>
                <p>
                    <label htmlFor="">Menu</label>
                    <input type="text" name="menu" value={menu} onChange={changeInput} placeholder="메뉴명을 영어로 입력해주세요" pattern="^[a-zA-Z\s]+$"/>
                </p>
                <p>
                    <label htmlFor="">칼로리</label>
                    <input type="text" name="kcal" value={kcal} onChange={changeInput} placeholder="칼로리를 입력해주세요"  />
                </p>
                <p>
                    <label htmlFor="">중량</label>
                    <input type="text" name="gram" value={gram} onChange={changeInput} placeholder="중량을 입력해주세요"  />
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