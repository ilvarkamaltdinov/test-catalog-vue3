<template>
  <li class="card">
    <div class="card__image-wrapper">
      <slot name="image">
        <div class="skeleton skeleton--image"></div>
      </slot>
    </div>
    <div class="card__title">
      <slot name="title">
        <div class="skeleton skeleton--title"></div>
      </slot>
    </div>
    <div class="card__description">
      <slot name="description">
        <div class="skeleton skeleton--description"></div>
      </slot>
    </div>
    <div class="card__controls">
      <slot name="controls">
        <div class="skeleton skeleton--controls"></div>
      </slot>
    </div>
  </li>
</template>

<style>
.skeleton {
  background: #e0e0e0;
  border-radius: 4px;
}

.skeleton--image {
  height: 100%;
  width: 100%;
}

.skeleton--title {
  height: 42px;
  width: 100%;
}

.skeleton--description {
  height: 56px;
  width: 100%;
}

.skeleton--controls {
  height: 48px;
  width: 100%;
}

.card {
  padding: 16px;
  flex: 320px 1;
  border-radius: 16px;
  box-shadow: 0 0 16px rgba(0, 0, 0, .16);
}

.card__title {
  font-size: 18px;
  font-weight: bold;
  margin-top: 16px;
  min-height: 42px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card__description {
  margin-top: 16px;
  min-height: 56px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: darkgray;
}

.card__image-wrapper {
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card__image-wrapper img {
  display: block;
  max-width: 100%;
  max-height: 100%;
}

.card__controls {
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}


.button {
  outline: none;
  border: none;
  height: 48px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  font-family: Arial, serif;
  font-size: 16px;
  border-radius: 4px;
  transition: background-color .24s;
}

.button.button--more {
  background-color: #e0e0e0;
  flex: 1;
}

.button.button--more:active {
  background-color: #eee
}

@media (hover: hover) {
  .button {
    cursor: pointer;
  }

  .button.button--more:hover {
    background-color: #eee
  }
}

</style>