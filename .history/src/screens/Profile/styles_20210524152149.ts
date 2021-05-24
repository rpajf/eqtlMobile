import styled from 'styled-components/native';

import Button from '../../components/Button';

export const AdressArea = styled.View`
  display: flex;
  align-items: center;
  flex: 1;
  border-radius: 4px;

  /* border-width: 1px; */
  padding: 15px 20px 10px;
  border-color: #c4c4c4;
  width: 290px;
  height: 270px;
  margin-top: 30px;
`;
export const SmalText = styled.Text`
  color: #2b2c44;
  font-size: 18px;
  line-height: 18px;
`;
export const ProfileButton = styled(Button)`
  background-color: #6200ee;
  width: 160px;
  color: #fff;
  margin: 20px 0 20px 0;
`;
