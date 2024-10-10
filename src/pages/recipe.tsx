import ListRecipe from "@components/organism/list-recipe";
import NavButton from "@components/organism/nav-button";
import RecipeTitle from "@components/organism/recipe-title";
import { app } from "@config/app";
import { css, Stack } from "@mui/material"
import { PageComponent } from "@nxweb/react"
import "@fontsource/nunito"; // Defaults to weight 400
import "@fontsource/nunito/400.css"; // Specify weight
import "@fontsource/nunito/400-italic.css"; // Specify weight and style

const styles = css`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 3em 1em;
  overflow-y: scroll;
  box-sizing: border-box;
  align-items: center;
    &::after{
      top: 0;
      z-index: -1;
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      opacity: .6;
      background-image: url('${app.background}');
    }
    *{
      font-family: 'Nunito', sans-serif;
    }
`;

const Recipe: PageComponent = () => {
  return  (
    <Stack 
      spacing={2}
      css={styles}
    >
      <NavButton
        to={'/recipe-editor'} 
        title={'go to editor'}
        />
      <RecipeTitle title={'LIST DRINKS RECIPE'}/>
      <ListRecipe/>
    </Stack>
  )
  
}


export default Recipe