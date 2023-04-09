import React from 'react';
import {
    Container, Heading,
    MainAccordion, MainAccordionDetails,
    MainAccordionSummary,
    SmallAccordion,
    SmallAccordionDetails,
    SmallAccordionSummary
} from './styles';
import { Database } from 'assets/iconsButtons/navigation/database';
import { Image } from 'assets/iconsButtons/navigation/image';


function Navigation(): JSX.Element {


    return (
        <Container>
            <Heading>
                <Database />
                <span>Базы данных</span>
            </Heading>

            <MainAccordion >
                <MainAccordionSummary>
                    Интервальные данные
                </MainAccordionSummary>
                <MainAccordionDetails>

                </MainAccordionDetails>
            </MainAccordion>

            <MainAccordion expanded>
                <MainAccordionSummary >
                    Событийные данные
                </MainAccordionSummary>
                <MainAccordionDetails>

                    <SmallAccordion expanded>
                        <SmallAccordionSummary>
                            Пример 1
                        </SmallAccordionSummary>
                        <SmallAccordionDetails>
                            <SmallAccordion >
                                <SmallAccordionSummary>
                                    Пример 1.1
                                </SmallAccordionSummary>
                                <SmallAccordionDetails>
                                </SmallAccordionDetails>
                            </SmallAccordion>
                            <SmallAccordion >
                                <SmallAccordionSummary>
                                    Пример 1.2
                                </SmallAccordionSummary>
                                <SmallAccordionDetails>
                                </SmallAccordionDetails>
                            </SmallAccordion>
                        </SmallAccordionDetails>
                    </SmallAccordion>
                    <SmallAccordion>
                        <SmallAccordionSummary>
                            Пример 2
                        </SmallAccordionSummary>
                        <SmallAccordionDetails>
                        </SmallAccordionDetails>
                    </SmallAccordion>
                </MainAccordionDetails>
            </MainAccordion>

            <MainAccordion>
                <MainAccordionSummary>
                    Пример
                </MainAccordionSummary>
                <MainAccordionDetails>

                </MainAccordionDetails>
            </MainAccordion>

            <Heading>
                <Image />
                <span>Изображения</span>
            </Heading>

            <MainAccordion>
                <MainAccordionSummary>
                    Стринги
                </MainAccordionSummary>
                <MainAccordionDetails>

                </MainAccordionDetails>
            </MainAccordion>

            <MainAccordion>
                <MainAccordionSummary>
                    Блочная модель
                </MainAccordionSummary>
                <MainAccordionDetails>

                </MainAccordionDetails>
            </MainAccordion>

        </Container>
    );
}

export default Navigation;