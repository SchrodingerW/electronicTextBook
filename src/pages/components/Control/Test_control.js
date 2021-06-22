import React, { useState } from "react"
import "./test.css";

function Test_control() {
  const questions = [
    {
      questionText: "Какое ТО должно выполняться независимо от технического состояния СВТ?",
      answerOptions: [
        { answerText: "регламентированное", isCorrect: true },
        { answerText: "периодическое", isCorrect: false },
        { answerText: "с периодическим контролем", isCorrect: false },
      ]
    },
    {
      questionText: "Какой вид электричества представляет наибольшую угрозу компонентам компьютера при техническом обслуживании?",
      answerOptions: [
        { answerText: "переменный ток", isCorrect: false },
        { answerText: "статический разряд", isCorrect: true },
        { answerText: "постоянный ток", isCorrect: false },
      ]
    },
    {
      questionText: "На каких мониторах при неполадках в источнике питания изображение начинает волнообразно колыхаться?",
      answerOptions: [
        { answerText: "ЭЛТ", isCorrect: true },
        { answerText: "ЖК", isCorrect: false },
        { answerText: "плазменные", isCorrect: false },
      ]
    },
    {
      questionText: "Какой прибор предназначен для измерения тока без подключения к токовой цепи?",
      answerOptions: [
        { answerText: "вольтметр", isCorrect: false },
        { answerText: "токовые клещи", isCorrect: true },
        { answerText: "тестер изоляции", isCorrect: false },
      ]
    },
    {
      questionText: "Какая аппаратура используется для измерения электрических и механических параметров кабелей?",
      answerOptions: [
        { answerText: "тестеры кабеля", isCorrect: false },
        { answerText: "рефлектометры", isCorrect: true },
        { answerText: "анализаторы протоколов", isCorrect: false },
      ]
    },
    {
      questionText: "Какое устройство обеспечивает наиболее полную защиту от перебоев в сети электропитания?",
      answerOptions: [
        { answerText: "сетевой фильтр", isCorrect: false },
        { answerText: "линейный стабилизатор", isCorrect: false },
        { answerText: "источник бесперебойного питания", isCorrect: true },
      ]
    },
    {
      questionText: "Для решения каких неисправностей необходимо производить перепрошивку BIOS?",
      answerOptions: [
        { answerText: "аппаратных", isCorrect: false },
        { answerText: "программных", isCorrect: false },
        { answerText: "программно-аппаратных", isCorrect: true },
      ]
    },
    {
      questionText: "Какие данные не изменятся при возвращении к предыдущей точке восстановления после неудачной установки новой программы?",
      answerOptions: [
        { answerText: "реестр", isCorrect: false },
        { answerText: "Мои документы", isCorrect: true },
        { answerText: "файлы программы", isCorrect: false },
      ]
    },
    {
      questionText: "Что не является частью систем автоматического диагностирования?",
      answerOptions: [
        { answerText: "программные средства", isCorrect: false },
        { answerText: "аппаратные средства", isCorrect: false },
        { answerText: "утилиты операционной системы", isCorrect: true },
      ]
    },
    {
      questionText: "Какая из программ специального назначения выполняет проверку поверхности дисков?",
      answerOptions: [
        { answerText: "Victoria", isCorrect: true },
        { answerText: "Passmark BatteryMon", isCorrect: false },
        { answerText: "GPU-Z", isCorrect: false },
      ]
    },
    {
      questionText: "Какая из указанных программ предназначена для стрессового тестирования центрального процессора?",
      answerOptions: [
        { answerText: "CPU-Z", isCorrect: false },
        { answerText: "CPU Burn-in", isCorrect: true },
        { answerText: "GPU-Z", isCorrect: false },
      ]
    },
    {
      questionText: "В каком режиме восстановления нельзя восстановить поврежденный системный реестр?",
      answerOptions: [
        { answerText: "выборочное восстановление", isCorrect: true },
        { answerText: "быстрое восстановление", isCorrect: false },
        { answerText: "это можно сделать во всех режимах", isCorrect: false },
      ]
    },
    {
      questionText: "Какой RAID-массив не является отказоустойчивым?",
      answerOptions: [
        { answerText: "RAID 3", isCorrect: false },
        { answerText: "RAID 0", isCorrect: true },
        { answerText: "RAID 1", isCorrect: false },
      ]
    },
    {
      questionText: "В каком RAID-массиве применяется код Хемминга?",
      answerOptions: [
        { answerText: "RAID 2", isCorrect: true },
        { answerText: "RAID 3", isCorrect: false },
        { answerText: "RAID 6", isCorrect: false },
      ]
    },
    {
      questionText: "Какой RAID-массив нельзя создать, используя всего два диска?",
      answerOptions: [
        { answerText: "RAID 0", isCorrect: false },
        { answerText: "RAID 1", isCorrect: false },
        { answerText: "RAID 5", isCorrect: true },
      ]
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  const refresh = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
  }

  return (
    <div className="test">
      {

        showScore
          ?
          <div className="section_score">
            <div>Правильных ответов {score} из {questions.length}</div>
            <button className="refresh_btn"
              onClick={refresh}>Попробовать еще раз...</button>
          </div>
          :
          <div className="quizz">
            <div className="question_section">
              <div className="question_count">
                <span><b>Вопрос {currentQuestion + 1} / {questions.length}</b></span> 
              </div>
              <div className="question_text">{questions[currentQuestion].questionText}</div>
            </div>
            <div className="answer_section">
              {questions[currentQuestion].answerOptions.map(item =>
                <div className="button_test"
                  onClick={() => handleAnswerOptionClick(item.isCorrect)}
                >{item.answerText}</div>

              )}
            </div>
          </div>
      }
    </div >
  )
}

export default Test_control