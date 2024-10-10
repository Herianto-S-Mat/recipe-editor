import NavButton from "@components/organism/nav-button";
import RecipeCard from "@components/organism/recipe-card";
import RecipeDetail from "@components/organism/recipe-detail";
import RecipeEditor from "@components/organism/recipe-editor";
import RecipeSearch from "@components/organism/recipe-search";
import RecipeTitle from "@components/organism/recipe-title";
import { app } from "@config/app";
import { css, Stack } from "@mui/material";
import { PageComponent } from "@nxweb/react";
import "@fontsource/nunito"; 
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/400-italic.css"; 


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
      sx={{ 
        alignItems: 'center', 
        }}
    >
      <NavButton
        to={'/recipe'} 
        title={'see all recipes'}
      />
      <RecipeTitle title={'RECIPE EDITOR'}/>
      <RecipeCard rounded={true}>
        <RecipeSearch/>
        <RecipeEditor/>
      </RecipeCard>
      <RecipeCard>
        <RecipeDetail/>
      </RecipeCard>
    </Stack>
  )  
}


export default Recipe