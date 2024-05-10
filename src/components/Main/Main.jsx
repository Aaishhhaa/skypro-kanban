import { useEffect, useState } from 'react';
import Column from '../Column/Column';
import Spinner from '../Spinner/Spinner';
import { MainBlock, MainComponent, MainContent } from './Main.styled';
import { Container } from '../../Global.styled';

const Main = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timeOutId);
    };
  }, []);

  const filteredData = (data, theme) => {
    return data.filter((task) => task.status === theme);
  };

  return (
    <MainComponent>
      <Container>
        {isLoading ? (
          <Spinner />
        ) : (
          <MainBlock>
            <MainContent>
              <Column
                data={filteredData(data, 'Без статуса')}
                name={'Без статуса'}
              />
              <Column
                data={filteredData(data, 'Нужно сделать')}
                name={'Нужно сделать'}
              />
              <Column data={filteredData(data, 'В работе')} name={'В работе'} />
              <Column
                data={filteredData(data, 'Тестирование')}
                name={'Тестирование'}
              />
              <Column data={filteredData(data, 'Готово')} name={'Готово'} />
            </MainContent>
          </MainBlock>
        )}
      </Container>
    </MainComponent>
  );
};

export default Main;
