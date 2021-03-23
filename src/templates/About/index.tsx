import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import * as S from './style'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        tristique vehicula lectus ac vehicula. Nullam auctor gravida ultrices.
        Morbi auctor nisi nec dui rhoncus, sit amet auctor mauris congue.
        Curabitur mollis non felis quis sollicitudin. Phasellus quis massa
        posuere, semper orci dapibus, porta nulla.
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
