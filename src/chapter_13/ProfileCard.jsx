import Card from "./Card";

function ProfileCard(props) {
    return (
        <Card title="이유경" backgroundColor={"pink"}>
            <p>안녕하세요. 캐롯입니다.</p>
            <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
        </Card>
    );
}
export default ProfileCard;