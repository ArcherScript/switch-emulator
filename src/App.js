import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import Tile from "./Tile/Tile";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Actions from "./Actions/Actions";

const TileContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContentContainer = styled.div`
  display: flex;
  height: calc(100% - 40px);
  width: calc(100% - 60px);
  flex-direction: column;
  padding: 20px 30px;
  justify-content: space-between;
`;

const profileLength = 1;
const tileLength = 3;
const optionLength = 6;

const profiles = new Array(profileLength);
const tiles = new Array(tileLength);
const options = new Array(optionLength);
profiles.fill(false);
tiles.fill(false);
options.fill(false);

const selectionGrid = [profiles, tiles, options];
selectionGrid[0][0] = true;

const App = () => {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  const keyboardNavigation = useCallback(
    (e) => {
      const KEY_UP = e.keyCode === 38;
      const KEY_DOWN = e.keyCode === 40;
      const KEY_LEFT = e.keyCode === 37;
      const KEY_RIGHT = e.keyCode === 39;

      /**
       * Prevents the user from being able to navigate out of bounds.
       */
      const outOfBounds = () => {
        if (KEY_UP && posY - 1 < 0) {
          return true;
        }

        if (KEY_DOWN && posY + 1 >= selectionGrid.length) {
          return true;
        }

        if (KEY_LEFT && posX - 1 < 0) {
          return true;
        }

        if (KEY_RIGHT && posX + 1 >= selectionGrid[posY].length) {
          return true;
        }

        return false;
      };

      selectionGrid[posY][posX] = false;
      if (!outOfBounds()) {
        if (KEY_UP) {
          selectionGrid[posY - 1][0] = true;
          setPosY(posY - 1);
          setPosX(0);
        } else if (KEY_DOWN) {
          selectionGrid[posY + 1][0] = true;
          setPosY(posY + 1);
          setPosX(0);
        } else if (KEY_LEFT) {
          selectionGrid[posY][posX - 1] = true;
          setPosX(posX - 1);
        } else if (KEY_RIGHT) {
          selectionGrid[posY][posX + 1] = true;
          setPosX(posX + 1);
        }
      }
    },
    [posX, posY]
  );

  useEffect(() => {
    window.addEventListener("keyup", keyboardNavigation);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keyup", keyboardNavigation);
    };
  }, [keyboardNavigation]);

  return (
    <>
      <ContentContainer>
        <Header active={selectionGrid[0][0]} />
        <TileContainer>
          <Tile active={selectionGrid[1][0]} />
          <Tile active={selectionGrid[1][1]} />
          <Tile active={selectionGrid[1][2]} />
        </TileContainer>
        <Actions selectionGrid={selectionGrid} />
        <Footer />
      </ContentContainer>
    </>
  );
};

export default App;
