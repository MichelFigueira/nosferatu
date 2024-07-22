import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense
from tensorflow.keras.optimizers import Adam
import numpy as np

# Configurações do modelo
input_shape = (224, 224, 3)  # Ajuste para o tamanho do seu frame
num_classes = 10  # Número de classes para a classificação (ajuste conforme necessário)

# Criar o modelo
model = Sequential([
    Conv2D(32, (3, 3), activation='relu', input_shape=input_shape),
    MaxPooling2D((2, 2)),
    Conv2D(64, (3, 3), activation='relu'),
    MaxPooling2D((2, 2)),
    Conv2D(128, (3, 3), activation='relu'),
    MaxPooling2D((2, 2)),
    Flatten(),
    Dense(128, activation='relu'),
    Dense(num_classes, activation='softmax')
])

model.compile(optimizer=Adam(), loss='categorical_crossentropy', metrics=['accuracy'])

# Gerar dados de exemplo (substitua isso pelos seus dados reais)
X_train = np.random.rand(100, 224, 224, 3)  # 100 amostras de treino
y_train = np.random.randint(0, num_classes, size=(100,))  # Rótulos de treino
y_train = tf.keras.utils.to_categorical(y_train, num_classes=num_classes)

# Treinar o modelo
model.fit(X_train, y_train, epochs=10, batch_size=32)

# Salvar o modelo
model.save('app/model/video_model.h5')
