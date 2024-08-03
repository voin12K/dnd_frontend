import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../redux/axios';
import style from './Maingame.module.css';
import { Icon } from '@iconify/react';

function CreateGameModal({ show, onClose }) {
  const navigate = useNavigate();
  const options = ["English", "Russian", "Ukrainian"];
  const moneyOptions = [<Icon icon="mingcute:copper-coin-fill" style={{color: 'lightgray'}} />, <Icon icon="mingcute:copper-coin-fill" style={{color: 'gold'}} />, <Icon icon="mingcute:copper-coin-fill" style={{color: 'white'}} />, <Icon icon="mingcute:copper-coin-fill" style={{color: 'orange'}} />];
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [startedLevel, setStartedLevel] = useState(1);
  const [maxPlayer, setMaxPlayer] = useState(2);
  const [startedMoney, setStartedMoney] = useState(100);
  const [currencyIndex, setCurrencyIndex] = useState(0);
  const [companyName, setCompanyName] = useState('');
  const [description, setDescription] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevOption = () => {
    setSelectedOptionIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : options.length - 1));
  };

  const handleNextOption = () => {
    setSelectedOptionIndex((prevIndex) => (prevIndex < options.length - 1 ? prevIndex + 1 : 0));
  };

  const handleStartedLevelIncrement = () => {
    setStartedLevel((prevLevel) => (prevLevel < 999 ? prevLevel + 1 : 999));
  };

  const handleStartedLevelDecrement = () => {
    setStartedLevel((prevLevel) => (prevLevel > 1 ? prevLevel - 1 : 1));
  };

  const handleMaxPlayerIncrement = () => {
    setMaxPlayer((prevMax) => (prevMax < 10 ? prevMax + 1 : 10));
  };

  const handleMaxPlayerDecrement = () => {
    setMaxPlayer((prevMax) => (prevMax > 1 ? prevMax - 1 : 1));
  };

  const handleStartedMoneyChange = (event) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value)) {
      setStartedMoney(value);
    }
  };

  const handleCurrencyIncrement = () => {
    setCurrencyIndex((prevIndex) => (prevIndex < moneyOptions.length - 1 ? prevIndex + 1 : 0));
  };

  const handleCurrencyDecrement = () => {
    setCurrencyIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : moneyOptions.length - 1));
  };

  if (!show) {
    return null;
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/rooms/create', {
        name: companyName,
        availableRaces: [], // Добавьте актуальные данные
        availableClasses: [], // Добавьте актуальные данные
        startLevel: startedLevel,
        startMoney: startedMoney,
        maxPlayers: maxPlayer,
        language: options[selectedOptionIndex],
        description,
        isOpen,
      });
      const roomCode = response.data.room.code; // Предполагается, что сервер возвращает объект комнаты с кодом
      onClose();
      navigate(`/rooms/${roomCode}`); // Перенаправление на страницу с кодом комнаты
    } catch (error) {
      console.error('Error creating room:', error);
    }
  };

  return (
    <div className={style.modalBackdrop} onClick={handleBackdropClick}>
      <div className={style.modal}>
        <div className={style.container}>
          <div className={style.mest}>
            <div className={style.cont}>
              <div className={style.pop}>
                <div className={style.wrapper}>
                  <div>
                    <input
                      className={style.namecom}
                      placeholder="Company name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                  <div>
                    <button className={style.realbutt}>Available Races</button>
                  </div>
                  <div>
                    <button className={style.realbutt}>Available Classes</button>
                  </div>
                  <div className={`${style.butt} ${style.hop}`}>
                    <label>Started level</label>
                    <div className={style.fixedWidthLevel}>
                      <button className={style.butt2} onClick={handleStartedLevelDecrement}>-</button>
                      <span>{startedLevel}</span>
                      <button className={style.butt2} onClick={handleStartedLevelIncrement}>+</button>
                    </div>
                  </div>
                  <div className={`${style.butt} ${style.hop}`}>
                    <label>Max player</label>
                    <div className={style.fixedWidthLevel}>
                      <button className={style.butt2} onClick={handleMaxPlayerDecrement}>-</button>
                      <span>{maxPlayer}</span>
                      <button className={style.butt2} onClick={handleMaxPlayerIncrement}>+</button>
                    </div>
                  </div>
                  <div className={`${style.butt} ${style.hop}`}>
                    <label>Started money</label>
                    <div className={style.fixedWidthLevel}>
                      <input
                        className={style.nevi}
                        value={startedMoney}
                        onChange={handleStartedMoneyChange}
                      />
                      <button className={style.butt2} onClick={handleCurrencyDecrement}><Icon icon="ooui:next-rtl"  style={{color: 'black'}} /></button>
                      <span>{moneyOptions[currencyIndex]}</span>
                      <button className={style.butt2} onClick={handleCurrencyIncrement}><Icon icon="ooui:next-ltr"  style={{color: 'black'}} /></button>
                    </div>
                  </div>
                  <div className={`${style.butt} ${style.hop}`}>
                    <label>Language</label>
                    <div className={style.fixedWidthLanguage}>
                      <button className={style.butt2} onClick={handlePrevOption}><Icon icon="ooui:next-rtl"  style={{color: 'black'}} /></button>
                      <span>{options[selectedOptionIndex]}</span>
                      <button className={style.butt2} onClick={handleNextOption}><Icon icon="ooui:next-ltr"  style={{color: 'black'}} /></button>
                    </div>
                  </div>
                  <div>
                    <textarea
                      className={style.description}
                      placeholder="Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className={style.butt}>
                    <label>
                      <input
                        type="checkbox"
                        checked={isOpen}
                        onChange={(e) => setIsOpen(e.target.checked)}
                      />
                      Open or lock
                    </label>
                  </div>
                  <div>
                    <button onClick={handleSubmit} className={style.realbutt}>Create Room</button>
                  </div>
                  <div>
                    <button onClick={onClose} className={style.closeBtn}>Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function JoinGameModal({ show, onClose }) {

  
  if (!show) {
    return null;
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={style.modalBackdrop} onClick={handleBackdropClick}>
      <div className={style.modal}>
        <div className={style.container}>
          <div className={style.mest}>
            <div className={style.cont}>
              <div className={style.pop}>
                <div className={style.wrapper}>
                  <div>
                    <input placeholder="Enter game code" />
                  </div>
                  <div>
                    <button onClick={onClose} className={style.closeBtn}>Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Maingame() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  const handleNewGameClick = () => {
    setIsCreateModalOpen(true);
  };

  const handleCloseCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  const handleJoinGameClick = () => {
    setIsJoinModalOpen(true);
  };

  const handleCloseJoinModal = () => {
    setIsJoinModalOpen(false);
  };

  return (
    <div>
      <div className={style.games}>
        <div>
          <label className={style.tetx}>Companies as player</label>
          <div className={style.opo}>
            <div className={style.img}></div>
            <div className={style.img}></div>
            <button className={style.btn} onClick={handleJoinGameClick}>Enter using code</button>
          </div>
          <label className={style.tetx}>Companies as master</label>
          <div className={style.opo}>
            <div className={style.img}></div>
            <div className={style.img}></div>
            <button className={style.btn} onClick={handleNewGameClick}>Create new game</button>
          </div>
        </div>
      </div>
      <CreateGameModal show={isCreateModalOpen} onClose={handleCloseCreateModal} />
      <JoinGameModal show={isJoinModalOpen} onClose={handleCloseJoinModal} />
    </div>
  );
}
