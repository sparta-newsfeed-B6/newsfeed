import { useSelector } from 'react-redux';
import { Button } from '../Button';
import {
  StButton,
  StContent,
  StHiddenText,
  StIcon,
  StImage,
  StImageBox,
  StIntroduction,
  StJob,
  StName,
  StProfile,
  StRow,
  StTextContent,
  StThumbnail,
  StTitle
} from './styles';
import { DEFAULT_AVATAR } from '.';

const UserProfile = () => {
  const userInfo = useSelector(({ auth }) => auth.data?.userInfo) || {};

  return (
    <>
      <StProfile>
        <StRow>
          <StThumbnail>
            <StImageBox>
              <StImage src={userInfo.thumbnail || DEFAULT_AVATAR} alt={userInfo.displayName} />
            </StImageBox>
            <StButton type="button" to="/profile/modify">
              <StIcon />
              <StHiddenText>프로필 수정하기</StHiddenText>
            </StButton>
          </StThumbnail>
          <StTextContent>
            <StName>{userInfo.displayName}</StName>
            <StJob>{userInfo.job}</StJob>
          </StTextContent>
        </StRow>
        <StIntroduction>
          <StTitle>소개</StTitle>
          <StContent>{userInfo.introduction}</StContent>
        </StIntroduction>
      </StProfile>
      <Button href="/editor/new" size="medium" fullWidth>
        나의 포트폴리오도 올리기
      </Button>
    </>
  );
};

export default UserProfile;
