import MenuItem from "./MenuItem";

const MenuList = ({data, onDel, onEdit}) => {
    return (
        <div className="MenuList">
            <table>
                <colgroup>
                    <col className="w1" />
                    <col className="w2" />
                    <col className="w2" />
                    <col className="w3" />
                    <col className="w4" />
                    <col className="w5" />
                </colgroup>
                <thead>
                    <tr>
                        <th>이미지</th>
                        <th>메뉴</th>
                        <th>Menu</th>
                        <th>칼로리</th>
                        <th>중량</th>
                        <th>관리</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => <MenuItem key={item.id} item={item} onDel={onDel} onEdit={onEdit} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MenuList;