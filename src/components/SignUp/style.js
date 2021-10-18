import styled from "styled-components"

export const SubContainer = styled.div`
    width: 50%;
    margin: 0 auto;
    text-align: center;

    .google{
        width: 50px;
        height: 50px;
        margin: 15px;
    }

    .ou{
        margin-top: 22px;
    }

    .signUpTitle{
        margin: 20px 0 45px;
    }

    .buttonContainer{
        padding-top: 15px;
    }

    @media (min-width: 768px){
        box-shadow: 0 0 1em gray;
        width: 662px;
        border-radius: 40px;
        width: 375px;
    }
`

export const Logo = styled.div`

    .logoImage{
        display: none;
    }

    @media (min-width: 768px){

        .logoImage{
            display: block;
            width: 300px;
            height: 110px;
            margin: 0 auto;
        }
        
    }
`
export const Image = styled.div`
    .signupImage{
        display: none;
    }

    @media (min-width: 768px){

    .signupImage{
        width: 50vw;
        height: 100vh;
        display: block;
    }

}
`
export const BigContainer = styled.div`
@media (min-width: 768px){
    display: flex;
}
`

export const Container = styled.div`

@media (min-width: 768px){
    width: 50vw;
    height: 100vh;
}
`
