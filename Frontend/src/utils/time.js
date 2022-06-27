/** Get the time**/

const nowDate = new Date()
// Which day is today
// const w = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const nowWeek = nowDate.getDay()

export const getTime = (setTimeSlot) => {
  switch (nowWeek) {
    case 0: // Sunday
      if (nowDate.getDate() > 6) {
        setTimeSlot({
          start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 6),
          end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + nowDate.getDate()
        })
      } else {
        switch (nowDate.getMonth() + 1) {
          case 3: // Last month was Feburary
            if (((nowDate.getFullYear() % 4) === 0 && nowDate.getFullYear() % 100 !== 0) || nowDate.getFullYear() % 400 === 0) {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(29 - Math.abs(nowDate.getDate() - 6)),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + nowDate.getDate()
              })
            } else {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(28 - Math.abs(nowDate.getDate() - 6)),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + nowDate.getDate()
              })
            }
            break;
          case 1: // On Jan
            setTimeSlot({
              start: (nowDate.getFullYear() - 1) + '-' + String(nowDate.getMonth() + 12).padStart(2,'0') + '-' + String(31 - Math.abs(nowDate.getDate() - 6)),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + nowDate.getDate()
            })
            break;
          case 5: // No 31st
          case 7:
          case 10:
          case 12:
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(30 - Math.abs(nowDate.getDate() - 6)),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + nowDate.getDate()
            })
            break;
          case 2: // With 31st
          case 4:
          case 6:
          case 8:
          case 9:
          case 11:
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(31 - Math.abs(nowDate.getDate() - 6)),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + nowDate.getDate()
            })
            break;
          default:
            break;
        }
      }
      // console.log('Sunday')
      break;
    case 1: // Monday
      switch (nowDate.getMonth() + 1) {
        case 2: // Feb
          if (((nowDate.getFullYear() % 4) === 0 && nowDate.getFullYear() % 100 !== 0) || nowDate.getFullYear() % 400 === 0) {
            if ((nowDate.getDate() + 6) > 29) {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate()).padStart(2,'0'),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 6) - 29).padStart(2,'0')
              })
            } else {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate()).padStart(2,'0'),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 6).padStart(2,'0')
              })
            }
          } else {
            if ((nowDate.getDate() + 6) > 28) {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate()).padStart(2,'0'),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 6) - 28).padStart(2,'0')
              })
            } else {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate()).padStart(2,'0'),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 6).padStart(2,'0')
              })
            }
          }
          break;
        case 1: // 1,3,5,7,8,9,10
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
          if ((nowDate.getDate() + 6) > 31) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate()).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 6) - 31).padStart(2,'0')
            })
          } else {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate()).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 6).padStart(2,'0')
            })
          }
          break;
        case 4: // 4,6,9,11
        case 6:
        case 9:
        case 11:
          if ((nowDate.getDate() + 6) > 30) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate()).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 6) - 30).padStart(2,'0')
            })
          } else {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate()).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 6).padStart(2,'0')
            })
          }
          break;
        default: // 12
          if ((nowDate.getDate() + 6) > 31) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate()).padStart(2,'0'),
              end: (nowDate.getFullYear() + 1) + '-' + String(1).padStart(2,'0') + '-' + String((nowDate.getDate() + 6) - 31).padStart(2,'0')
            })
          } else {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate()).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 6).padStart(2,'0')
            })
          }
          break;
      }
      // console.log(timeSlot)
      // console.log('Monday')
      break;
    case 2: // Tuesday
      switch (nowDate.getMonth() + 1) {
        case 1: // Jan
          if (nowDate.getDate() <= 1) {
            setTimeSlot({
              start: (nowDate.getFullYear() - 1) + '-' + String(12).padStart(2,'0') + '-' + String(31).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 5).padStart(2,'0')
            })
          } else if ((nowDate.getDate() + 5) > 31) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 1).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 5) - 31).padStart(2,'0')
            })
          } else {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 1).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 5).padStart(2,'0')
            })
          }
          break;
        case 2: // Tuesday
          if (nowDate.getDate() <= 1) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(31).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 5).padStart(2,'0')
            })
            } else if (((nowDate.getFullYear() % 4) === 0 && nowDate.getFullYear() % 100 !== 0) || nowDate.getFullYear() % 400 === 0) {
              if ((nowDate.getDate() + 5) > 29) {
                setTimeSlot({
                  start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 1).padStart(2,'0'),
                  end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 5) - 29).padStart(2,'0')
                })
              } else {
                setTimeSlot({
                  start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 1).padStart(2,'0'),
                  end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 5).padStart(2,'0')
                })
              }
            } else {
              if ((nowDate.getDate() + 5) > 28) {
                setTimeSlot({
                  start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 1).padStart(2,'0'),
                  end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 5) - 28).padStart(2,'0')
                })
              } else {
                setTimeSlot({
                  start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 1).padStart(2,'0'),
                  end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 5).padStart(2,'0')
                })
              }
            }
          break;
        case 3: // March
          if (nowDate.getDate() <= 1) {
            if (((nowDate.getFullYear() % 4) === 0 && nowDate.getFullYear() % 100 !== 0) || nowDate.getFullYear() % 400 === 0) {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(29).padStart(2,'0'),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 5).padStart(2,'0')
              })
            } else {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(28).padStart(2,'0'),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 5).padStart(2,'0')
              })
            }
          } else if ((nowDate.getDate() + 5) > 31) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 1).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 5) - 31).padStart(2,'0')
            })
          } else {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 1).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 5).padStart(2,'0')
            })
          }
          break;
        case 12: // December
          if (nowDate.getDate() <= 1) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(30).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 5).padStart(2,'0')
            })
          } else if ((nowDate.getDate() + 5) > 31) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 1).padStart(2,'0'),
              end: (nowDate.getFullYear() + 1) + '-' + String(1).padStart(2,'0') + '-' + String((nowDate.getDate() + 5) - 31).padStart(2,'0')
            })
          } else {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 1).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 5).padStart(2,'0')
            })
          }
          break;
        case 4: // 4,6,9,11
        case 6:
        case 9:
        case 11:
          if (nowDate.getDate() <= 1) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(31).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 5).padStart(2,'0')
            })
          } else if ((nowDate.getDate() + 5) > 30) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 1).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 5) - 30).padStart(2,'0')
            })
          } else {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 1).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 5).padStart(2,'0')
            })
          }
          break;
        case 5: // 5,7,10
        case 7:
        case 10:
          if (nowDate.getDate() <= 1) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(30).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 5).padStart(2,'0')
            })
          } else if ((nowDate.getDate() + 5) > 31) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 1).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 5) - 31).padStart(2,'0')
            })
          } else {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 1).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 5).padStart(2,'0')
            })
          }
          break;
          case 8: // Aug
            if (nowDate.getDate() <= 1) {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(31).padStart(2,'0'),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 5).padStart(2,'0')
              })
            } else if ((nowDate.getDate() + 5) > 31) {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 1).padStart(2,'0'),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 5) - 31).padStart(2,'0')
              })
            } else {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 1).padStart(2,'0'),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 5).padStart(2,'0')
              })
            }
            break;
        default:
          break;
      }
      // console.log('Tue')
      break;
    case 3: // Wed
      switch (nowDate.getMonth() + 1) {
        case 1: // Jan
          if (nowDate.getDate() <= 2) {
            setTimeSlot({
              start: (nowDate.getFullYear() - 1) + '-' + String(12).padStart(2,'0') + '-' + String(31 - Math.abs(nowDate.getDate() - 2)).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 4).padStart(2,'0')
            })
          } else if ((nowDate.getDate() + 4) > 31) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 2).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 4) - 31).padStart(2,'0')
            })
          } else {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 2).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 4).padStart(2,'0')
            })
          }
          break;
        case 2: // Feb
        if (nowDate.getDate() <= 2) {
          setTimeSlot({
            start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(30 - Math.abs(nowDate.getDate() - 2)).padStart(2,'0'),
            end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 4).padStart(2,'0')
          })
          } else if (((nowDate.getFullYear() % 4) === 0 && nowDate.getFullYear() % 100 !== 0) || nowDate.getFullYear() % 400 === 0) {
            if ((nowDate.getDate() + 4) > 29) {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 2).padStart(2,'0'),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 4) - 29).padStart(2,'0')
              })
            } else {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 2).padStart(2,'0'),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 4).padStart(2,'0')
              })
            }
          } else {
            if ((nowDate.getDate() + 4) > 28) {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 2).padStart(2,'0'),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 4) - 28).padStart(2,'0')
              })
            } else {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 2).padStart(2,'0'),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 4).padStart(2,'0')
              })
            }
          }
          break;
        case 3: // March
          if (nowDate.getDate() <= 2) {
            if (((nowDate.getFullYear() % 4) === 0 && nowDate.getFullYear() % 100 !== 0) || nowDate.getFullYear() % 400 === 0) {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(29 - Math.abs(nowDate.getDate() - 2)).padStart(2,'0'),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 4).padStart(2,'0')
              })
            } else {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(28 - Math.abs(nowDate.getDate() - 2)).padStart(2,'0'),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 4).padStart(2,'0')
              })
            }
          } else if ((nowDate.getDate() + 4) > 31) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 2).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 4) - 31).padStart(2,'0')
            })
          } else {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 2).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 4).padStart(2,'0')
            })
          }
          break;
        case 12: // Dec
          if (nowDate.getDate() <= 2) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(30 - Math.abs(nowDate.getDate() - 2)).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 4).padStart(2,'0')
            })
          } else if ((nowDate.getDate() + 4) > 31) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 2).padStart(2,'0'),
              end: (nowDate.getFullYear() + 1) + '-' + String(1).padStart(2,'0') + '-' + String((nowDate.getDate() + 4) - 31).padStart(2,'0')
            })
          } else {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 2).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 4).padStart(2,'0')
            })
          }
          break;
        case 4: // 4,6,9,11
        case 6:
        case 9:
        case 11:
          if (nowDate.getDate() <= 2) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(31 - Math.abs(nowDate.getDate() - 2)).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 4).padStart(2,'0')
            })
          } else if ((nowDate.getDate() + 4) > 30) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 2).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 4) - 30).padStart(2,'0')
            })
          } else {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 2).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 4).padStart(2,'0')
            })
          }
          break;
        case 5: // 5,7,10
        case 7:
        case 10:
          if (nowDate.getDate() <= 2) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(30 - Math.abs(nowDate.getDate() - 2)).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 4).padStart(2,'0')
            })
          } else if ((nowDate.getDate() + 4) > 31) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 2).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 4) - 31).padStart(2,'0')
            })
          } else {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 2).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 4).padStart(2,'0')
            })
          }
          break;
        case 8: // Aug
          if (nowDate.getDate() <= 2) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(31 - Math.abs(nowDate.getDate() - 2)).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 4).padStart(2,'0')
            })
          } else if ((nowDate.getDate() + 4) > 31) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 2).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 4) - 31).padStart(2,'0')
            })
          } else {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 2).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 4).padStart(2,'0')
            })
          }
          break;
        default:
          break;
      }
      // console.log('Wed')
      break;
    case 4: // Thursday
      switch (nowDate.getMonth() + 1) {
        case 1: // Jan
          if (nowDate.getDate() <= 3) {
            setTimeSlot({
              start: (nowDate.getFullYear() - 1) + '-' + String(12).padStart(2,'0') + '-' + String(31 - Math.abs(nowDate.getDate() - 3)).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 3).padStart(2,'0')
            })
          } else if ((nowDate.getDate() + 3) > 31) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 3).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 3) - 31).padStart(2,'0')
            })
          } else {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 3).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 3).padStart(2,'0')
            })
          }
          break;
        case 2: // Feb
        if (nowDate.getDate() <= 3) {
          setTimeSlot({
            start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(30 - Math.abs(nowDate.getDate() - 3)).padStart(2,'0'),
            end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 3).padStart(2,'0')
          })
          } else if (((nowDate.getFullYear() % 4) === 0 && nowDate.getFullYear() % 100 !== 0) || nowDate.getFullYear() % 400 === 0) {
            if ((nowDate.getDate() + 3) > 29) {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 3).padStart(2,'0'),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 3) - 29).padStart(2,'0')
              })
            } else {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 3).padStart(2,'0'),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 3).padStart(2,'0')
              })
            }
          } else {
            if ((nowDate.getDate() + 3) > 28) {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 3).padStart(2,'0'),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 3) - 28).padStart(2,'0')
              })
            } else {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 3).padStart(2,'0'),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 3).padStart(2,'0')
              })
            }
          }
          break;
        case 3: // March
          if (nowDate.getDate() <= 3) {
            if (((nowDate.getFullYear() % 4) === 0 && nowDate.getFullYear() % 100 !== 0) || nowDate.getFullYear() % 400 === 0) {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(29 - Math.abs(nowDate.getDate() - 3)).padStart(2,'0'),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 3).padStart(2,'0')
              })
            } else {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(28 - Math.abs(nowDate.getDate() - 3)).padStart(2,'0'),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 3).padStart(2,'0')
              })
            }
          } else if ((nowDate.getDate() + 3) > 31) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 3).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 3) - 31).padStart(2,'0')
            })
          } else {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 3).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 3).padStart(2,'0')
            })
          }
          break;
        case 12: // Dec
          if (nowDate.getDate() <= 3) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(30 - Math.abs(nowDate.getDate() - 3)).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 3).padStart(2,'0')
            })
          } else if ((nowDate.getDate() + 3) > 31) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 3).padStart(2,'0'),
              end: (nowDate.getFullYear() + 1) + '-' + String(1).padStart(2,'0') + '-' + String((nowDate.getDate() + 3) - 31).padStart(2,'0')
            })
          } else {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 3).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 3).padStart(2,'0')
            })
          }
          break;
        case 4: // 4,6,9,11
        case 6:
        case 9:
        case 11:
          if (nowDate.getDate() <= 3) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(31 - Math.abs(nowDate.getDate() - 3)).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 3).padStart(2,'0')
            })
          } else if ((nowDate.getDate() + 3) > 30) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 3).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 3) - 30).padStart(2,'0')
            })
          } else {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 3).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 3).padStart(2,'0')
            })
          }
          break;
        case 5: // 5,7,10
        case 7:
        case 10:
          if (nowDate.getDate() <= 3) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(30 - Math.abs(nowDate.getDate() - 3)).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 3).padStart(2,'0')
            })
          } else if ((nowDate.getDate() + 3) > 31) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 3).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 3) - 31).padStart(2,'0')
            })
          } else {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 3).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 3).padStart(2,'0')
            })
          }
          break;
        case 8: // Aug
          if (nowDate.getDate() <= 3) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(31 - Math.abs(nowDate.getDate() - 3)).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 3).padStart(2,'0')
            })
          } else if ((nowDate.getDate() + 3) > 31) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 3).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 3) - 31).padStart(2,'0')
            })
          } else {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 3).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 3).padStart(2,'0')
            })
          }
          break;
        default:
          break;
      }
      // console.log('Thusday')
      break;
    case 5: // Friday
      switch (nowDate.getMonth() + 1) {
        case 1: // Jan
          if (nowDate.getDate() <= 4) {
            setTimeSlot({
              start: (nowDate.getFullYear() - 1) + '-' + String(12).padStart(2,'0') + '-' + String(31 - Math.abs(nowDate.getDate() - 4)).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 2).padStart(2,'0')
            })
          } else if ((nowDate.getDate() + 2) > 31) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 4).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 2) - 31).padStart(2,'0')
            })
          } else {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 4).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 2).padStart(2,'0')
            })
          }
          break;
        case 2: // Feb
        if (nowDate.getDate() <= 4) {
          setTimeSlot({
            start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(30 - Math.abs(nowDate.getDate() - 4)).padStart(2,'0'),
            end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 2).padStart(2,'0')
          })
          } else if (((nowDate.getFullYear() % 4) === 0 && nowDate.getFullYear() % 100 !== 0) || nowDate.getFullYear() % 400 === 0) {
            if ((nowDate.getDate() + 2) > 29) {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 4).padStart(2,'0'),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 2) - 29).padStart(2,'0')
              })
            } else {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 4).padStart(2,'0'),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 2).padStart(2,'0')
              })
            }
          } else {
            if ((nowDate.getDate() + 2) > 28) {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 4).padStart(2,'0'),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 2) - 28).padStart(2,'0')
              })
            } else {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 4).padStart(2,'0'),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 2).padStart(2,'0')
              })
            }
          }
          break;
        case 3: // Wed
          if (nowDate.getDate() <= 4) {
            if (((nowDate.getFullYear() % 4) === 0 && nowDate.getFullYear() % 100 !== 0) || nowDate.getFullYear() % 400 === 0) {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(29 - Math.abs(nowDate.getDate() - 4)).padStart(2,'0'),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 2).padStart(2,'0')
              })
            } else {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(28 - Math.abs(nowDate.getDate() - 4)).padStart(2,'0'),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 2).padStart(2,'0')
              })
            }
          } else if ((nowDate.getDate() + 2) > 31) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 4).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 2) - 31).padStart(2,'0')
            })
          } else {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 4).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 2).padStart(2,'0')
            })
          }
          break;
        case 12: // Dec
          if (nowDate.getDate() <= 4) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(30 - Math.abs(nowDate.getDate() - 3)).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 3).padStart(2,'0')
            })
          } else if ((nowDate.getDate() + 2) > 31) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 4).padStart(2,'0'),
              end: (nowDate.getFullYear() + 1) + '-' + String(1).padStart(2,'0') + '-' + String((nowDate.getDate() + 2) - 31).padStart(2,'0')
            })
          } else {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 4).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 2).padStart(2,'0')
            })
          }
          break;
        case 4: // 4,6,9,11
        case 6:
        case 9:
        case 11:
          if (nowDate.getDate() <= 4) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(31 - Math.abs(nowDate.getDate() - 3)).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 3).padStart(2,'0')
            })
          } else if ((nowDate.getDate() + 2) > 30) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 4).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 2) - 30).padStart(2,'0')
            })
          } else {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 4).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 2).padStart(2,'0')
            })
          }
          break;
        case 5: // 5,7,10
        case 7:
        case 10:
          if (nowDate.getDate() <= 4) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(30 - Math.abs(nowDate.getDate() - 4)).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 2).padStart(2,'0')
            })
          } else if ((nowDate.getDate() + 2) > 31) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 4).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 2) - 31).padStart(2,'0')
            })
          } else {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 4).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 2).padStart(2,'0')
            })
          }
          break;
        case 8: // Aug
          if (nowDate.getDate() <= 4) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(31 - Math.abs(nowDate.getDate() - 4)).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 2).padStart(2,'0')
            })
          } else if ((nowDate.getDate() + 2) > 31) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 4).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 2) - 31).padStart(2,'0')
            })
          } else {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 4).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 2).padStart(2,'0')
            })
          }
          break;
        default:
          break;
      }
      // console.log('Friday')
      break;
    case 6: // Saturday
      switch (nowDate.getMonth() + 1) {
        case 1: // Jan
          if (nowDate.getDate() <= 5) {
            setTimeSlot({
              start: (nowDate.getFullYear() - 1) + '-' + String(12).padStart(2,'0') + '-' + String(31 - Math.abs(nowDate.getDate() - 5)).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 1).padStart(2,'0')
            })
          } else if ((nowDate.getDate() + 1) > 31) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 5).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 1) - 31).padStart(2,'0')
            })
          } else {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 5).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 1).padStart(2,'0')
            })
          }
          break;
        case 2: // Feb
        if (nowDate.getDate() <= 5) {
          setTimeSlot({
            start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(30 - Math.abs(nowDate.getDate() - 5)).padStart(2,'0'),
            end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 1).padStart(2,'0')
          })
          } else if (((nowDate.getFullYear() % 4) === 0 && nowDate.getFullYear() % 100 !== 0) || nowDate.getFullYear() % 400 === 0) {
            if ((nowDate.getDate() + 1) > 29) {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 5).padStart(2,'0'),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 1) - 29).padStart(2,'0')
              })
            } else {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 5).padStart(2,'0'),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 1).padStart(2,'0')
              })
            }
          } else {
            if ((nowDate.getDate() + 1) > 28) {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 5).padStart(2,'0'),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 1) - 28).padStart(2,'0')
              })
            } else {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 5).padStart(2,'0'),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 1).padStart(2,'0')
              })
            }
          }
          break;
        case 3: // March
          if (nowDate.getDate() <= 5) {
            if (((nowDate.getFullYear() % 4) === 0 && nowDate.getFullYear() % 100 !== 0) || nowDate.getFullYear() % 400 === 0) {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(29 - Math.abs(nowDate.getDate() - 5)).padStart(2,'0'),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 1).padStart(2,'0')
              })
            } else {
              setTimeSlot({
                start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(28 - Math.abs(nowDate.getDate() - 5)).padStart(2,'0'),
                end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 1).padStart(2,'0')
              })
            }
          } else if ((nowDate.getDate() + 1) > 31) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 5).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 1) - 31).padStart(2,'0')
            })
          } else {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 5).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 1).padStart(2,'0')
            })
          }
          break;
        case 12: // Dec
          if (nowDate.getDate() <= 5) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(30 - Math.abs(nowDate.getDate() - 5)).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 1).padStart(2,'0')
            })
          } else if ((nowDate.getDate() + 1) > 31) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 5).padStart(2,'0'),
              end: (nowDate.getFullYear() + 1) + '-' + String(1).padStart(2,'0') + '-' + String((nowDate.getDate() + 1) - 31).padStart(2,'0')
            })
          } else {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 5).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 1).padStart(2,'0')
            })
          }
          break;
        case 4: // 4,6,9,11
        case 6:
        case 9:
        case 11:
          if (nowDate.getDate() <= 5) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(31 - Math.abs(nowDate.getDate() - 5)).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 1).padStart(2,'0')
            })
          } else if ((nowDate.getDate() + 1) > 30) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 5).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 1) - 30).padStart(2,'0')
            })
          } else {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 5).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 1).padStart(2,'0')
            })
          }
          break;
        case 5: // 5,7,10
        case 7:
        case 10:
          if (nowDate.getDate() <= 5) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(30 - Math.abs(nowDate.getDate() - 5)).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 1).padStart(2,'0')
            })
          } else if ((nowDate.getDate() + 1) > 31) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 5).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 1) - 31).padStart(2,'0')
            })
          } else {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 5).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 1).padStart(2,'0')
            })
          }
          break;
        case 8: // Aug
          if (nowDate.getDate() <= 5) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth()).padStart(2,'0') + '-' + String(31 - Math.abs(nowDate.getDate() - 5)).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 1).padStart(2,'0')
            })
          } else if ((nowDate.getDate() + 1) > 31) {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 5).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 2).padStart(2,'0') + '-' + String((nowDate.getDate() + 1) - 31).padStart(2,'0')
            })
          } else {
            setTimeSlot({
              start: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() - 5).padStart(2,'0'),
              end: nowDate.getFullYear() + '-' + String(nowDate.getMonth() + 1).padStart(2,'0') + '-' + String(nowDate.getDate() + 1).padStart(2,'0')
            })
          }
          break;
        default:
          break;
      }
      // console.log('Saturday')
      break;
    default: 
      // console.log('Error')
      break;
  }
}