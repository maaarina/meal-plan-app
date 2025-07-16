import React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { styles } from "./style";
import Header from "../components/header/";
import MealCards from "../components/mealCards/"

export default function Index(){ 

    return(
        <View>
            <Header titulo="Meal Plan" /> 

            <ScrollView> 
                <View style={styles.container}> 
                    <Text style={styles.dayTitle}> Segunda </Text>
                    <MealCards mealType="Café da Manhã"/>
                    <MealCards mealType="Almoço"/>
                    <MealCards mealType="Jantar"/> 
                    
                    <Text style={styles.dayTitle}> Terça </Text>
                    <MealCards mealType="Café da Manhã"/>
                    <MealCards mealType="Almoço"/>
                    <MealCards mealType="Jantar"/> 

                    <Text style={styles.dayTitle}> Quarta </Text>
                    <MealCards mealType="Café da Manhã"/>
                    <MealCards mealType="Almoço"/>
                    <MealCards mealType="Jantar"/> 

                    <Text style={styles.dayTitle}> Quinta </Text>
                    <MealCards mealType="Café da Manhã"/>
                    <MealCards mealType="Almoço"/>
                    <MealCards mealType="Jantar"/> 

                    <Text style={styles.dayTitle}> Sexta </Text>
                    <MealCards mealType="Café da Manhã"/>
                    <MealCards mealType="Almoço"/>
                    <MealCards mealType="Jantar"/> 

                    <Text style={styles.dayTitle}> Sábado </Text>
                    <MealCards mealType="Café da Manhã"/>
                    <MealCards mealType="Almoço"/>
                    <MealCards mealType="Jantar"/> 

                    <Text style={styles.dayTitle}> Domingo </Text>
                    <MealCards mealType="Café da Manhã"/>
                    <MealCards mealType="Almoço"/>
                    <MealCards mealType="Jantar"/> 
                </View>
                
            </ScrollView>
        </View>
    );
};
