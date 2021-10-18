import { CardGroupDetailBody } from './style';
import Button from '../Button';

const GroupDetailCard = () => {
    return (
        <CardGroupDetailBody>
            <h3>Nome do Grupo</h3>
            <p>Categoria do Grupo</p>
            <Button text={'Inscreva-se'}>Inscreva-se</Button>
            <p>Descrição do Grupo</p>
            <div>
                <h4>Metas</h4>
                <div>Card Metas</div>
            </div>
            <div>
                <h4>Atividades</h4>
                <ul>
                    <li>Atividade 1</li>
                    <li>Atividade 2</li>
                </ul>
            </div>
        </CardGroupDetailBody>
    );
};

export default GroupDetailCard;